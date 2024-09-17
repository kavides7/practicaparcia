const Usuario = require('../models/usuario.model.js'); // Asegúrate de que el nombre del archivo del modelo es correcto

// Crear un nuevo usuario
exports.create = async (req, res) => {
    try {
        const { id_usuario, nombre, apellido, email, telefono, direccion, fecha_registro, estado } = req.body;
        const nuevoUsuario = await Usuario.create({ id_usuario, nombre, apellido, email, telefono, direccion, fecha_registro, estado });
        res.status(200).json({
            message: "Usuario creado exitosamente con id = " + nuevoUsuario.id_usuario,
            usuario: nuevoUsuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear usuario",
            error: error.message
        });
    }
};

// Obtener todos los usuarios
exports.retrieveAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json({
            message: "Usuarios obtenidos exitosamente",
            usuarios
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener usuarios",
            error: error.message
        });
    }
};

// Obtener usuario por ID
exports.getById = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const usuario = await Usuario.findByPk(usuarioId);
        if (!usuario) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                error: "404"
            });
        }
        res.status(200).json({
            message: "Usuario obtenido exitosamente",
            usuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener usuario",
            error: error.message
        });
    }
};

// Actualizar usuario por ID
exports.updateById = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const { nombre, apellido, email, telefono, direccion, fecha_registro, estado } = req.body;
        const [updated] = await Usuario.update(
            { nombre, apellido, email, telefono, direccion, fecha_registro, estado },
            { where: { id_usuario: usuarioId } }
        );

        if (updated) {
            const updatedUsuario = await Usuario.findByPk(usuarioId);
            res.status(200).json({
                message: "Usuario actualizado exitosamente",
                usuario: updatedUsuario
            });
        } else {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: "404"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar usuario",
            error: error.message
        });
    }
};

// Eliminar usuario por ID
exports.deleteById = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                error: "404"
            });
        }
        await Usuario.destroy({
            where: { id_usuario: usuarioId }
        });
        res.status(200).json({
            message: "Usuario eliminado exitosamente",
            usuario
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar usuario",
            error: error.message
        });
    }
};
