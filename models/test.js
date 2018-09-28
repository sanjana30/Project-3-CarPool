const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Login and Registration Details

const testSchema = new Schema({  
    source: { type: String, required: true },
    destination: { type: String, required: true },
});

module.exports = mongoose.model("test", testSchema);

