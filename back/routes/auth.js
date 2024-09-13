const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const pool = require('../config/database');

const router = express.Router();

//Registro de usuario nuevo

router.post('/register' , async(pedido, res) =>{
    const {nombre, email, password, rol} = pedido.body;

    if(!nombre || !email || !password || !rol){
        return res.status(400).json({error: 'Por favor completa todos los campos'});
    }

    try {
        const hashPassword = await bcrypt.hash(password,10);

        const [result] = await pool.execute(
            'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?,?,?,?)',
            [nombre, email, hashPassword, rol]
        );
      
        res.status(201).json({message: 'Usuario registrado con éxito', userid: result.insertId});
    }catch (error){
        console.error('Error al registrar usuario: ', error.stack);
        res.status(500).json({error:'Error al registrar usuario'});
    }
});

// Login del usuario y generacion de token JWT

router.post('/login', async (pedido,res)=>{
    const {email, password} = pedido.body;

    if(!email || !password) {
        return res.status(400).json({error:'Por favor, completa los campos'});
    }

    try {
        const [rows] = await pool.execute('SELECT * FROM usuarios WHERE email = ?',[email]);

        if(rows.length === 0){
            return res.status(400).json({error:'Usuario no encontrado'});
        }

        const user = rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).json({error:'Contraseña incorrecta'});
        }

        const token = jwt.sign({userid: user.id}, process.env.JWT_SECRET, {expiresIn:'1H'});

        res.status(200).json({message:'Login exitoso', token});
    }catch (error){
        console.error('Error durante el login: ', error);
        res.status(500).json({error:'Error durante el login'});
    }
});

module.exports = router;