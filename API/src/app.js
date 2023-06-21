const express = require('express');
const app = express();
const router = require('./router');
const morgan = require('morgan');

app.use(express.json());
app.use(router);
app.use(morgan('dev'));

module.exports = app;