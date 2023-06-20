const express = require('express');
const router = express.Router();
const checkToken = require('./middlewares/checkToken');

const registerUserController = require('./controllers/User/registerUserController');
const publicRouteController = require('./controllers/User/publicRouteController');
const loginUserController = require('./controllers/User/loginUserController');
const privateRouteController = require('./controllers/User/privateRouteController');
const updateUserController = require('./controllers/User/UpdateUserController');

router.get('/', publicRouteController.getPublicRoute);
router.post('/auth/register', registerUserController.registerUser);
router.post('/auth/login', loginUserController.loginUser);
router.get('/user/:id', checkToken , privateRouteController.privateRoute);
router.put('/user/:id/name', checkToken ,updateUserController.updateNameUser);
router.put('/user/:id/email', checkToken ,updateUserController.updateEmailUser);
router.put('/user/:id/password', checkToken ,updateUserController.updatePasswordUser);

module.exports = router;
