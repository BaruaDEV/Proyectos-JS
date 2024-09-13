const jwt = require('jsonwebtoken');
require('dotenv').config();

// Validacion de token para registrarse/loguearse

function authMiddleware(pedido, res, next) {
    const authHeader = pedido.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acceso denegado, token no provisto' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        pedido.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
};

// Restringir acceso a paginas o funiones si no estas registrado o autorizado.

const authenticateToken= (pedido, res, next) => {
    const authHeader = pedido.headers['authentication'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer token

    // si no hay token, respuesta = no autorizado
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (error, user)=>{
        // si el token es inválido, respuesta = prohibido
        if(error) return res.sendStatus(403);
        pedido.user = user;
        next();
    });
};


module.exports = {
    authMiddleware,
    authenticateToken
};