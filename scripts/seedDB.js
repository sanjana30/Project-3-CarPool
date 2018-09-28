const mongoose = require("mongoose");
const db = require("../models");

const defaultRoles = [
    {
        role: "ADMIN",
        permissions: [
            'Approve User',
            'Delete User',
            'Update Profile'
        ]
    },
    {
        role: "RIDER",
        permissions: [
            'Update Profile',
            'Ride Request'

        ]
    },
    {
        role: "DRIVER",
        permissions: [
            'Update Profile',
            'Accept Request'
        ]
    }
];

class SeedDB {

    seedDefaultRole() {
        const that = this;
        db.roleSchema.remove({})
            .then(() => db.roleSchema.collection.insertMany(defaultRoles))
            .then(data => {
                console.log(data.result.n + " records inserted!");
                that.seedAdmin(data.ops[0]._id);
            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    }

    seedAdmin(role) {
        db.userSchema.remove({})
            .then(() => db.userSchema.create({
                username: 'admin',
                password: 'admin',
                role: role
            })).then(data => {
            console.log(data.result + " records inserted!");
        }).catch(err => {
            console.error(err);
            process.exit(1);
        });

    }
}

module.exports = new SeedDB();

