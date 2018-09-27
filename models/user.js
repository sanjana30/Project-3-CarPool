const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Login and Registration Details
const userSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  phone: { type: String, required: true },
  licenceNum: { type: String, required: true },
  password: { type: String, required: true },
  source: { type: String },
  destination: { type: String },
  isOnline: { type: Boolean, default: true },
  isDriving: { type: Boolean, default: true },
  date: { type: Date, default: Date.now }
});

const Saveduser = mongoose.model("Saveduser", userSchema);

module.exports = Saveduser;
