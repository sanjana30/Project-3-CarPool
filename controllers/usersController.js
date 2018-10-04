const async = require('async');
const db = require("../models");


module.exports = {

    findAll: function (req, res) {
        db.userSchema
            .find({_id: {$not: req.params.id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.userSchema
            .findById(req.tokenPayload._id).select("-password").select("-__v")
            .then((dbModel) => {
                res.json(dbModel);
            }).catch(err => res.status(422).json(err));
    },
    
    update: function (req, res) {
        db.userSchema
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => {console.log(dbModel);res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        let result = req.body;
        let roles = [];

        async.waterfall([
            // Get roles from DB for Driver and rider
            function (callback) {
                db.roleSchema.find().then(function (records) {
                    if (result.isCarOwner === 'true') {
                        for (let record of records) {
                            if (record.role == "DRIVER" || record.role == "RIDER")
                                roles.push(record._id);
                        }

                    } else {
                        for (let record of records) {
                            if (record.role == "RIDER")
                                roles.push(record._id);
                        }
                    }
                    // It assigns the roles to the property result.roles
                    result.roles = roles;

                    return callback(null, result);
                }).catch(function (error) {
                    return callback(error);
                });
            },
            // Save User Object to DB
            function (result, callback) {
                db.userSchema
                    .create(result)
                    .then(function (dbModel) {
                        return callback(null, dbModel);
                    })
                    .catch(function (error) {
                        return callback(error);
                    });
            }

        ], function (error, result) {
            if (error) {
                res.status(422).json(error);
            }
            else {
                res.json(result);
            }

        });
    },

    
    delete: function (req, res) {
        db.userSchema
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Saveduser
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};


//
//     create: function (req, res) {
//         let result = req.body;
//         let roles = [];
//         db.roleSchema.find().then(function (records) {
//             if (result.isCarOwner === 'true') {
//                 for (let record of records) {
//                     if (record.role == "DRIVER" || record.role == "RIDER")
//                         roles.push(record._id);
//                 }
//
//             } else {
//                 for (let record of records) {
//                     if (record.role == "RIDER")
//                         roles.push(record._id);
//                 }
//             }
//             // It assigns the roles to the property result.roles
//             result.roles = roles;
//             db.userSchema
//                 .create(result)
//                 .then(function (dbModel) {
//                     res.json(dbModel);
//                 })
//                 .catch(function (error) {
//                     res.status(422).json(error);
//                 });
//
//         }).catch(function (error) {
//             res.status(422).json(error);
//         });
//
//     },
//
//     update: function (req, res) {
//         db.userSchema
//             .findOneAndUpdate({_id: req.params.id}, req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     delete: function (req, res) {
//         db.userSchema
//             .findById({_id: req.params.id})
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     }
// };
