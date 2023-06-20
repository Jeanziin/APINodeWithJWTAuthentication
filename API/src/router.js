const express = require('express');
const router = express.Router();
const checkToken = require('./middlewares/checkToken');

const registerUserController = require('./controllers/registerUserController');
const publicRouteController = require('./controllers/publicRouteController');
const loginUserController = require('./controllers/loginUserController');
const privateRouteController = require('./controllers/privateRouteController');

router.get('/', publicRouteController.getPublicRoute);
router.post('/auth/register', registerUserController.registerUser);
router.post('/auth/login', loginUserController.loginUser);
router.get('/user/:id',checkToken, privateRouteController.privateRoute);

module.exports = router;
