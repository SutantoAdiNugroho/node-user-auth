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
  message: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Suggestion = mongoose.model("users_suggestions", usersAcctSchema);

module.exports = Suggestion;
