const httpStatus = require('http-status');
const { User, Room } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const userJoin = async (userBody) => {
  if (await User.isUsernameTaken(userBody.username)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Username already taken');
  }

  if (await Room.isRoomExist(userBody.roomId)) {
    User.create({username: userBody.username});
  
    return {
      username: userBody.username,
      roomId: userBody.roomId
    }
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'room not exist');
};

/**
 * Get user by username
 * @param {String} username
 * @returns {Promise<User>}
 */
const getUsername = async (username) => {
  return User.findOne({username});
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUsername = async (username) => {
  const user = await getUsername(username);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return username;
};

module.exports = {
  userJoin,
  deleteUsername,
};