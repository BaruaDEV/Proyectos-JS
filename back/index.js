const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Backend corriendo');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
