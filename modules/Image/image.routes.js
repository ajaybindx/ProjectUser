const express = require('express');
const controller = require('./image.controller');


const routes = express.Router();


routes.post('/', controller.uploadImage);
//routes.get('/upload', controller.getform);


module.exports = routes;
