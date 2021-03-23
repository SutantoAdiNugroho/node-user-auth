const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersAcctSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model("users_accts", usersAcctSchema);

module.exports = UsersModel;
