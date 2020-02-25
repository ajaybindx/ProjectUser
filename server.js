// load all required packages

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./modules');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ type: 'appliction/json' }));
// prot of server
const port = 8080;
// connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/userDetails', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', routes.routes);
app.listen(port);

console.log('Server is running on ' + port);
