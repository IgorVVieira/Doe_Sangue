const Sequelize = require('sequelize');
const database = require('../config/database');

const Donor = require('../models/Donor');

const connection = new Sequelize(database);

Donor.init(connection);

module.exports = connection;