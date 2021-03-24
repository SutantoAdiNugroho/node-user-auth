const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersAcctSchema = new Schema({
  usersId: {
    type: Schema.Types.ObjectId,
    ref: "users_accts",
    required: true,
  },
  telpNumber: {
    type: Number,
    minLength: 8,
    required: true,
  },
  fullAdress: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model("users_bio", usersAcctSchema);

module.exports = UsersModel;
