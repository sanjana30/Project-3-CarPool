const jwt = require("jsonwebtoken");
const db = require("../models/index");
const secret = "carpool";

class AuthService {

    /**
     * This function authenticate the login
     *
     */
    authenticate(username, password, authCallback) {
        const that = this;
        db.userSchema.findOne({username: username}, function (err, dbUser) {
            if (err) {
                return authCallback(err);
            }
            if (dbUser && dbUser.username) {
                dbUser.comparePassword(password, (error, isMatch) => {
                    if (error) {
                        return authCallback('Invalid Password');
                    } else {
                        if (isMatch === true) {
                            that.createToken(dbUser, function (token) {
                                return authCallback(null, token, dbUser);
                            });
                        } else {
                            return authCallback('Invalid Password');
                        }
                    }
                });
            } else {
                return authCallback('User not found');
            }
        });
    }

    /**
     *
     * Once user is authenticate token is created
     */

    createToken(userSchema, createTokenCallback) {
        const payload = {
            username: userSchema.username,
            name: userSchema.name,
            _id: userSchema._id,
        };

        console.log('New token created for user ' + userSchema.username);
        return createTokenCallback(jwt.sign(payload, secret, {expiresIn: 7200}));
    }

    /**
     * Verify the JWT token
     */

    verifyToken(token, verifyTokenCallback) {
        jwt.verify(token, secret, function (error, decoded) {
            if (error) {
                return verifyTokenCallback('Invalid token.');
            } else {
                console.log('Token decoded' + decoded);
                return verifyTokenCallback(null, decoded);
            }
        });
    }
}

module.exports = new AuthService();