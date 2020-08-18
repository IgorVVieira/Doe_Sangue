const express = require('express');
const routes = express.Router();

const DonorController = require('./controllers/DonorController');
const DonorsMiddleware = require('./middlewares/DonorMiddleware');

routes.get('/donors', DonorController.index);
routes.post('/donors', DonorsMiddleware.checkTypeBlood, DonorController.store);

module.exports = routes;