const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { chatService } = require('../services');

const addMessage = catchAsync(async (req, res) => {
  const chat = await chatService.addMessage(req.body);
  res.status(httpStatus.CREATED).json({
    data: chat,
    message: 'success send message'
  });
});

const getChat = catchAsync(async (req, res) => {
  const chat = await chatService.getAllChatbyRoom(req.params)
  res.status(httpStatus.OK).json({
    data: chat,
    message: 'success get all by roomId',
  });
});

module.exports = {
  addMessage,
  getChat,
};