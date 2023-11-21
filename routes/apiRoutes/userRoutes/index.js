const express = require('express');
const userRoutes = express.Router();
const { getUsers } = require('../../../controllers/userController');

// /api/user 
userRoutes.get('/', getUsers);

module.exports = userRoutes;
