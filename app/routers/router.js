let express = require('express');
let router = express.Router();

// Suponiendo que tu controlador de usuarios está en la carpeta controllers
const usuarios = require('../controllers/usuario.controller.js');

// Crear un nuevo usuario
router.post('/api/usuarios/create', usuarios.create);

// Obtener todos los usuarios
router.get('/api/usuarios/all', usuarios.retrieveAll);

// Obtener un usuario por ID
router.get('/api/usuarios/onebyid/:id', usuarios.getById);

// Actualizar un usuario por ID
router.put('/api/usuarios/update/:id', usuarios.updateById);

// Eliminar un usuario por ID
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

module.exports = router;
