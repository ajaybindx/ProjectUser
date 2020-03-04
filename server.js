// load all required packages

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./modules');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Public Folder
app.use(express.static('./modules/'));

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// port of server
const port = 8080;
// connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/userDetails', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', routes.routes);
app.listen(port);

console.log('Server is running on ' + port);
