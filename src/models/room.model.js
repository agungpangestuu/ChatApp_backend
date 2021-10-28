const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    roomId: String
  },
  {
    timestamps: true
  }
);

/**
 * Check if roomId is exists
 * @param {string} roomId - The roomId
 * @returns {Promise<boolean>}
 */
roomSchema.statics.isRoomExist = async function (roomId) {
  const room = await this.findOne({roomId});
  return !!room;
};

let Room = mongoose.model("rooms", roomSchema);

module.exports = Room;