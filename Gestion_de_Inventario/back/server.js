const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { authMiddleware, authenticateToken} = require('./middleware/authMiddleware');
const pool = require('./config/database'); // importa la conexion a la base de datos
const dashboardRouter = require('./routes/dashboard');
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//Ruta de autenticacion
app.use('/api/auth', authRoutes);

//Ruta protegida
app.use('/dashboard', authenticateToken ,dashboardRouter);

// Ejemplo de ruta protegida
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Accediste a una ruta protegida', user: req.user });
});

// Obtener productos
app.use('/api', productosRouter);

// Obtener pedidos
app.use('/api', pedidosRouter);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Backend corriendo');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
