const express = require('express');
const routes = express.Router();

const DonorsController = require('./controllers/DonorsController');

// Configurar a apresentação da página
routes.get('/', DonorsController.index);

// Pegar dados do form
routes.post('/insert', DonorsController.insert);

// Deletar todos os donors
routes.get('/delete', DonorsController.delete);

module.exports = routes;