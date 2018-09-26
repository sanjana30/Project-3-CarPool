const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  source: {type: String},
  destination: {type: String},
  isOnline: {type: Boolean, default: true},
  isDriving: {type: Boolean, default: true},
  date: { type: Date, default: Date.now }
});

const Saveduser = mongoose.model("Saveduser", userSchema);

module.exports = Saveduser;
