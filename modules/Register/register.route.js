const express = require('express');
const controller = require('./register.controller');


const router = express.Router();

router.get('/', controller.getRegisteredUser);
router.post('/',controller.postRegister);
router.delete('/:register_id',controller.deleteRegistereduser);



module.exports = router;