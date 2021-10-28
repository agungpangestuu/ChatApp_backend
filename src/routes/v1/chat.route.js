const express = require('express');
const validate = require('../../middlewares/validate');
const chatValidation = require('../../validations/chat.validation');
const chatController = require('../../controllers/chat.controller');

const router = express.Router();

router.post('/', validate(chatValidation.addMeassge), chatController.addMessage);

router.get('/:roomId', validate(chatValidation.getChat), chatController.getChat);

module.exports = router;