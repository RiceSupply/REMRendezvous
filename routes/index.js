const express = require('express');
const apiRoutes = express.Router();
const routes = require('./apiRoutes');

apiRoutes.use('/api', routes);

module.exports = apiRoutes;
