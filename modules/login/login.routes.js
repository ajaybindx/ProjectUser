const express = require('express');
const controller = require('./login.controller');


const router = express.Router();

router.get('/', controller.loginpage);
router.post('/',controller.postlogin);




module.exports = router;