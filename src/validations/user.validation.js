const Joi = require('joi');

const userJoin = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    roomId: Joi.string().required()
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    username: Joi.string(),
  }),
};

module.exports = {
  userJoin,
  deleteUser,
};