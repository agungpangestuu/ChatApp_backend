const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/join', validate(userValidation.userJoin), userController.joinRoom);

router.delete('/:username', validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;