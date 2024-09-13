// Endpoint para obtener datos de la tabla de pedidos y manejarlos
const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const pool = require('../config/database');
require('dotenv').config();

router.post('/pedidos', async (req, res)=>{
    const { productos } = req.body;

    // crear pedido
    try {
        const [resultado] = await pool.query('INSERT INTO pedidos (total) VALUES (0)');
        const pedidoId = resultado.insertId;

        let total = 0;

        //Agregar productos al pedido
        for (let producto of productos) {
            const [productoData] = await pool.query('SELECT precio FROM productos WHERE id_productos = ?', [producto.id_productos]);
            const precio = productoData[0].precio;
            const subtotal = precio * producto.cantidad;

            await pool.query('INSERT INTO movimiento_de_inventario (id_pedido, id_producto, cantidad, precio) VALUES (?,?,?,?)',
                [pedidoId, producto.id_productos, producto.cantidad, subtotal]);

            total += subtotal; 
        }

        //Actualizar total del pedido
        await pool.query('UPDATE pedidos SET total = ? WHERE id_pedido = ?', [total, pedidoId]);
        console.log("Total actualizado: ", total, typeof total); // Verifica el tipo de dato
        res.json({ id: pedidoId, total });
    }catch (error) {
        console.error('Error al crear el pedido', error);
        res.status(500).json({error: 'Error al crear el pedido'});
    }
});


// Obtener los pedidos

router.get('/pedidos', async (pedido, res)=>{
    try {
        const [pedidos] = await pool.query('SELECT * FROM pedidos');

        for (let pedido of pedidos) {
            const [productos] = await pool.query(
                `SELECT p.id_productos, p.nombre, p.descripcion, mi.cantidad, mi.precio
                FROM movimiento_de_inventario mi
                JOIN productos p ON mi.id_producto = p.id_productos
                WHERE mi.id_pedido = ?`,
                [pedido.id_pedido]
            );
            pedido.productos = productos; // añadir los productos asociados a cada pedido
        }

        res.json(pedidos);
    }catch (error){
        console.error('Error al obtener pedidos: ', error);
        res.status(500).json({error: 'Error al obtener pedidos'});
    }
});

// Completar o Cancelar pedidos

router.put('/pedidos/:id_pedido', async(req, res)=>{
    const {id_pedido} = req.params; // ID del pedido
    const {estado} = req.body; // estado: completado o cancelado

    try {
        await pool.query('UPDATE pedidos SET estado = ? WHERE id_pedido = ?', [estado, id_pedido]);
        

        //Si elpedido se completa, actualizar la cantidad de productos
        if (estado === 'completado') {
            const [transacciones] = await pool.query('SELECT id_producto, cantidad FROM movimiento_de_inventario WHERE id_pedido = ?', [id_pedido]);
            
            // actualizar la cantidad de productos en la tabla productos
            for (const transaccion of transacciones) {
                const {id_producto, cantidad} = transaccion;

                await pool.query('UPDATE productos SET cantidad = cantidad + ? WHERE id_productos = ?', [cantidad, id_producto]);
            }
        }
        res.json({message: 'Estado de pedido actualizado y producto actualizado correctamente'});
    }catch (error){
        console.error('Error al actualizar estado de pedido y producto: ', error);
        res.status(500).json({error: 'Error al actualizar estado de pedido y producto'});
    }
});

module.exports = router;