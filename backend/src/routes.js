const express = require('express');
const connection = require('./database/conection'); 
const OngController = require('./controller/OngController');
const IncidentesController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',  OngController.create);

routes.post('/incidents', IncidentesController.create);
routes.get('/incidents', IncidentesController.index);
routes.delete('/incidents/:id', IncidentesController.delete)
routes.get('/profile', ProfileController.index);

module.exports = routes;