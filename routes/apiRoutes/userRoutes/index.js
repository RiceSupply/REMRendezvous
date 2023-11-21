const router = require('express').Router();
const sleepCycleRoutes = require('./sleepCycleRoutes');
const homeRoutes = require('./homeRoutes');
const { createUser } = require('../../../controllers/userController');

// /api/user 
router.post('/', createUser);

module.exports = router;
