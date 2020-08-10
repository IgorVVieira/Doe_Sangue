const express = require('express');
const routes = express.Router();
const DonorsController = require('./controllers/DonorsController');
const DonorsMiddlewares = require('./middlewares/DonorsMiddlewares');

routes.get('/donors', DonorsController.index);

routes.post('/donors', DonorsMiddlewares.checkTypeBlood, DonorsController.store);

routes.post('/delete', DonorsController.delete);

module.exports = routes;