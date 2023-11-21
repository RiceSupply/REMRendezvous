const express = require('express');
const apiRoutes = express.Router();
const routes = require('./apiRoutes'); // Assuming this is the correct import

apiRoutes.use('/api', routes);

module.exports = apiRoutes;
