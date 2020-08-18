const express = require('express');
const routes = express.Router();

const DonorController = require('./controllers/DonorController');

routes.get('/donors', DonorController.index);

routes.post('/donors', DonorController.store);

routes.post('/delete', DonorController.delete);

module.exports = routes;