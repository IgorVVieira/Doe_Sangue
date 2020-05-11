const Sequelize = require('sequelize');

const connection = new Sequelize('doe', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;