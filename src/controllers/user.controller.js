const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const joinRoom = catchAsync(async (req, res) => {
  const user = await userService.userJoin(req.body);
  res.status(httpStatus.CREATED).send({
    data: user,
    message: 'success join'
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await userService.deleteUsername(req.params.username)
  res.send({message: 'success delete user ' + user});
});

module.exports = {
  joinRoom,
  deleteUser,
};