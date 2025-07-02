const express = require('express');
const cors = require('cors');
const app = express();

const estudiantesRoutes = require('./routes/estudiantesRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const productosRoutes = require('./routes/productosRoutes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola, Mundo!');
})


app.use('/estudiantes', estudiantesRoutes)
app.use('/profesores', profesoresRoutes)
app.use('/productos', productosRoutes);


app.listen(6500, () => {
  console.log('Servidor Activo en el puerto 6500');
});
