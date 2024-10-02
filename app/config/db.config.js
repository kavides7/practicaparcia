const { Sequelize } = require('sequelize');

const env = {
    database: 'umg_antigua_2024_20404_9ug9',
    username: 'umg_antigua_2024_20404_9ug9_user',
    password: 'jjOk5Ydxvsh0OSqZKcHik74DgZZhAz7t',
    host: 'dpg-crus5qqj1k6c73ff03fg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle,
    }
});

module.exports = sequelize;
