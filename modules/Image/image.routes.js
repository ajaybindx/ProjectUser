const express = require('express');
const controller = require('./image.controller');


const routes = express.Router();


routes.post('/', controller.uploadImage);
routes.get('/:imagepath', controller.getImage);
routes.get('/', controller.allImages);

module.exports = routes;
