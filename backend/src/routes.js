const express = require('express');
const routes = express.Router();

const DonorController = require('./controllers/DonorController');
const DonorMiddleware = require('./middlewares/DonorMiddleware');

routes.get('/donors', DonorController.index);

routes.get('/donors/:id', DonorController.show);

routes.post('/donors', DonorMiddleware.checkTypeBlood, DonorController.store);

routes.put('/donors/:id', DonorMiddleware.checkTypeBlood, DonorController.update);

routes.delete('/donors/:id', DonorController.delete);

module.exports = routes;