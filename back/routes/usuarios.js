// back/routes/usuarios.js

const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Agregar un usuario
router.post('/', async (req, res) => {
    const { nombre, email, password, rol } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO Usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)', 
                                          [nombre, email, password, rol]);
        res.json({ id_usuario: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, email, password, rol } = req.body;
    try {
        await pool.query('UPDATE Usuarios SET nombre = ?, email = ?, password = ?, rol = ? WHERE id_usuario = ?', 
                         [nombre, email, password, rol, id]);
        res.json({ message: 'Usuario actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//eliminar usuario
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM Usuarios WHERE id_usuario = ?', [id]);
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
