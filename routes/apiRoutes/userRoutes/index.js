const express = require('express');
const userApiRoutes = express.Router();
const { getUsers } = require('../../../controllers/userController');

// /api/user 
userApiRoutes.get('/', getUsers);

module.exports = userApiRoutes;
