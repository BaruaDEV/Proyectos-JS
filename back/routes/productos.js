// Endpoint para obtener datos de la tabla de productos
const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const pool = require('../config/database');
require('dotenv').config();

// obtener lista de productos
router.get('/productos', async(pedido,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.json(rows);
    }catch (error){
        console.error('Error al obetener productos', error);
        res.status(500).json({error: 'Error al obtener productos'});
    }
});

// Agregar productos
router.post('/productos', async(pedido, res)=>{
    const {nombre, descripcion, precio, cantidad} = pedido.body;

    try {
        const [resultado] = await pool.query('INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?,?,?,?)',
            [nombre, descripcion, precio, cantidad]);
        res.json({ id_productos: resultado.insertId });
    }catch (error) {
        console.error('Error al agregar producto: ', error);
        res.status(500).json({error: 'Error al agregar producto'});
    }
});

// Modificar producto
router.put('/productos/:id_productos', async(pedido,res)=>{
    const {id_productos} = pedido.params;
    const {nombre, descripcion, precio, cantidad} = pedido.body;

    try {
        const [resultado] = await pool.query('UPDATE productos SET nombre =?, descripcion =?, precio=?, cantidad=? WHERE id_productos= ?',
            [nombre, descripcion, precio, cantidad, id_productos]);
        res.json({message: 'Producto actualizado correctamente'});
    }catch (error){
        console.error('Error al actualizar producto: ', error);
        res.status(500).json({error: 'error al actualizar producto'});
    }
});

// Eliminar producto
router.delete('/productos/:id_productos', async(pedido, res)=>{
    const { id_productos } = pedido.params;
    console.log("ID recibido para eliminar:", id_productos);
    try {
        await pool.query('DELETE FROM productos WHERE id_productos = ?', [id_productos]);
        res.json({message: 'Producto eliminado con éxito'});
    }catch (error){
        console.error('Error al eliminar producto', error);
        res.status(500).json({error: 'Error al eliminar producto'});
    }
});

module.exports = router;