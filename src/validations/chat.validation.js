const Joi = require('joi');

const addMeassge = {
  body: Joi.object().keys({
    roomId: Joi.string().required(),
    message: Joi.string().required(),
    sender: Joi.string().required()
  }),
};

const getChat = {
  params: Joi.object().keys({
    roomId: Joi.string().required()
  }),
};


module.exports = {
  addMeassge,
  getChat
};