const express = require('express');
const user = require('./User');
const register = require('./Register');
const image = require('./Image');
const login = require('./login');

const routes = express.Router();

routes.use('/users', user.routes);
routes.use('/registers', register.routes);
routes.use('/images', image.routes);
routes.use('/login',login.routes)

module.exports = { routes };

