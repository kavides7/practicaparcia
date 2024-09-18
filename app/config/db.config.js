const { Sequelize } = require('sequelize');

const env = {
    database: 'umg_antigua_2024_20404_ah4n',
    username: 'umg_antigua_2024_20404_ah4n_user',
    password: 'Ztfq3Q6lAepSPq2hXefe76OG5tKfRdwv',
    host: 'dpg-cr6jnitds78s73bur500-a.oregon-postgres.render.com',
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
