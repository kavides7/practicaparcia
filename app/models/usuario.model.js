module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true // Se asegura de que el email sea único
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: true
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fecha_registro: {
            type: Sequelize.DATE,
            allowNull: false
        },
        estado: {
            type: Sequelize.ENUM('activo', 'inactivo', 'suspendido'),
            allowNull: false
        }
    });

    return Usuario;
};
