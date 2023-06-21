const express = require('express');
const router = express.Router();
const checkToken = require('./middlewares/checkToken');

const registerUserController = require('./controllers/User/registerUserController');
const publicRouteController = require('./controllers/User/publicRouteController');
const loginUserController = require('./controllers/User/loginUserController');
const privateRouteController = require('./controllers/User/privateRouteController');
const updateUserController = require('./controllers/User/UpdateUserController');
const eventController = require('./controllers/Crud/eventController');
const projectController = require('./controllers/Crud/projectController');

// Router users
router.get('/', publicRouteController.getPublicRoute);
router.post('/auth/register', registerUserController.registerUser);
router.post('/auth/login', loginUserController.loginUser);
router.get('/user/:id', checkToken, privateRouteController.privateRoute);
router.put('/user/:id/name', checkToken, updateUserController.updateNameUser);
router.put('/user/:id/email', checkToken, updateUserController.updateEmailUser);
router.put('/user/:id/password', checkToken, updateUserController.updatePasswordUser);

// Router Event
router.post('/event', eventController.createEvent);
router.get('/event', eventController.getEvent);
router.get('/event/:id', eventController.getEventById);
router.patch('/event/:id', eventController.UpdateEventbyId);
router.delete('/event/:id', eventController.deleteEvent);

//Router Project
router.post('/project', projectController.createProject);
router.get('/project', projectController.getProject);
router.get('/project/:id', projectController.getProjectById);
router.patch('/project/:id', projectController.UpdateProjectbyId);
router.delete('/project/:id', projectController.deleteProject);


module.exports = router;
