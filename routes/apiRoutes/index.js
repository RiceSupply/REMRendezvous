const express = require('express');
const mainRoutes = express.Router();
const homeRoutes = require('./homeRoutes');
const sleepCycleRoutes = require('./sleepCycleRoutes');
const userRoutes = require('./userRoutes');

mainRoutes.use('/home', homeRoutes);
mainRoutes.use('/sleepCycle', sleepCycleRoutes);
mainRoutes.use('/user', userRoutes);

module.exports = mainRoutes;
