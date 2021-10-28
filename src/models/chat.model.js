const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    sender: {
      type: String
    },
    roomiId: {
      type: String,
      ref: 'Room'
    }
  },
  {
    timestamps: true
  }
);

let Chat = mongoose.model("chats", chatSchema);

module.exports = Chat;