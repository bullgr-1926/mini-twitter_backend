const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = new Schema({
  text: {
    type: String,
    trim: true,
    required: true,
    minLength: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Messages", Message);
