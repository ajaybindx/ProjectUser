const express = require('express');
const user = require('./User');
const register= require('./Register');
const image = require('./Image');

const routes = express.Router();

routes.use('/users', user.routes);
routes.use('/registers',register.routes);
routes.use('/images',image.routes);

module.exports = { routes };

