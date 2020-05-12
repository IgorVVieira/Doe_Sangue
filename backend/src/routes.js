const express = require('express');
const routes = express.Router();
const DonorsController = require('./controllers/DonorsController');

routes.get('/donors', DonorsController.index);

routes.post('/donors', DonorsController.store);

routes.post('/delete', DonorsController.delete);

module.exports = routes;