const express = require('express');
const routes = express.Router();

const DonorsController = require('./controllers/DonorsController');

// Configurar a apresentação da página
routes.get('/donors', DonorsController.index);

// Pegar dados do form
routes.post('/donors', DonorsController.store);

// Deletar todos os donors
routes.get('/delete', DonorsController.delete);

//Lista donors com tipo sanguíneo específico
// routes.post('/donors', DonorsController.listDonors);

module.exports = routes;