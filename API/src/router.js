const express = require('express');
const router = express.Router();


const publicRouteController = require('./controllers/publicRouteController');

router.get('/', publicRouteController.getPublicRoute);



module.exports = router;