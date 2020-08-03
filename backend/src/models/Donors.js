const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database/Connection');

const Donors = connection.define('donors', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blood: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

try {
    Donors.sync({
        force: false
    });
} catch (err) {
    console.log(`Erro: ${err}`);
}

module.exports = Donors;