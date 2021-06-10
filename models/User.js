const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minLength: 6,
    maxLength: 32,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
  },
});

module.exports = mongoose.model("User", User);
