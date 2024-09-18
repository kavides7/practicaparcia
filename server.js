const express = require('express');
const app = express();
const PORT = 3000;

// Importar la configuración de la base de datos
const sequelize = require('./app/config/db.config'); // Ajusta esta ruta según tu estructura

// Middleware para parsear JSON
app.use(express.json());

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Sincronizar la base de datos
sequelize.sync({ force: false }) // Aquí es donde puede estar el problema
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
