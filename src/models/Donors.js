const Sequelize = require('sequelize');
const connection = require('../database/Connection');

const Donors = connection.define('donors', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    blood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Donors.sync({
    force: false
}).then(() => {
    console.log('Tabela criada');
});

module.exports = Donors;