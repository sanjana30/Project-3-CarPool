const jwt = require("jsonwebtoken");
const db = require("../models/index");
const secret = "carpool";

class AuthService {
    authenticate(username, password, authCallback) {
        const that = this;
        db.userSchema.findOne({username: username, password: password}, function (err, dbUser) {
            if (err) {
                return authCallback(err);
            }
            console.log(dbUser);
            if (dbUser && dbUser.username) {
                that.createToken(dbUser, function (token) {
                    return authCallback(null, token, dbUser);
                });
            } else {
                return authCallback('User not found');
            }
        });
    }

    createToken(userSchema, createTokenCallback) {
        const payload = {
            username: userSchema.username
        };

        console.log('New token created for user ' + userSchema.username);
        return createTokenCallback(jwt.sign(payload, secret, {expiresIn: 7200}));
    }
}

module.exports = new AuthService();