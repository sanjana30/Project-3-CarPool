const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Login and Registration Details

const userSchema = new Schema({
        username: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        dob: {type: Date, required: true},
        phone: {type: String, required: true},
        driverLicence: {type: String, required: true},
        licencePlate: {type: String, required: true},
        isCarOwner : {type: Boolean, required: true},
        password: {type: String, required: true},
        //one user can have multiple roles
        roles: [{
            type: Schema.ObjectId,
            ref: 'role'
        }],
// source: { type: String },
// destination: { type: String },
// isOnline: { type: Boolean, default: true },
// isDriving: { type: Boolean, default: true },
// date: { type: Date, default: Date.now }
    })
;

module.exports = mongoose.model("user", userSchema);

