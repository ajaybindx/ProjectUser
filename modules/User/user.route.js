
const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.getUser);
router.get('/:user_id',controller.getById);
router.post('/',controller.insertUser);
router.put('/:user_id',controller.putUser);
router.delete('/:user_id',controller.deleteUser);


module.exports = router;


