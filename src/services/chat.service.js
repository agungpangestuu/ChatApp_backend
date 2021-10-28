const { Chat } = require('../models');

/**
 * Get All Chat by roomId
 * @param {Object} userBody
 * @returns {Promise<Chat>}
 */
const getAllChatbyRoom = async (userBody) => {
  return Chat.find({roomId: userBody.roomId}).sort({data: 1})
};

/**
 * Add message 
 * @param {Object} userBody
 * @returns {Promise<Chat>}
 */
const addMessage = async (userBody) => {
  await Chat.create(userBody);
  return Chat.find({roomId: userBody.roomId}).sort({data: 1})
};

module.exports = {
  addMessage,
  getAllChatbyRoom,
};