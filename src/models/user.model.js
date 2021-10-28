const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String
  },
  {
    timestamps: true
  }
);

/**
 * Check if username is taken
 * @param {string} username - The username
 * @returns {Promise<boolean>}
 */
userSchema.statics.isUsernameTaken = async function (username) {
  const user = await this.findOne({username});
  return !!user;
};

let User = mongoose.model("users", userSchema);

module.exports = User;
