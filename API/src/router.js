const express = require('express');
const router = express.Router();


const registerUserController = require('./controllers/registerUserController');
const publicRouteController = require('./controllers/publicRouteController');

router.get('/', publicRouteController.getPublicRoute);
router.post('/auth/register',  registerUserController.registerUser);


module.exports = router;