
const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.getUser);
router.post('/',controller.insertUser);
router.put('/',controller.putUser);
router.delete('/:user_id',controller.deleteUser);


module.exports = router;


