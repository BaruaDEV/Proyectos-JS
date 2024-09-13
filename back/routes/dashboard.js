const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authMiddleware');

// Restringir acceso a esta página solo para usuarios autenticados mediante token
router.get('/', authenticateToken, (pedido, res)=>{
    res.json({message: 'Bienvenido al dashboard', user: pedido.user});
  });

  module.exports = router;