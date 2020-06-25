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

try {
    Donors.sync({
        force: false
    });
} catch (err) {
    console.log(`Erro: ${err}`);
}

module.exports = Donors;