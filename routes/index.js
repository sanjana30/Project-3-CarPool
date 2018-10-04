const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authService = require('./../service/authService');


/**
 *  This function is an interceptor and request filter which looks for authorization token
 *  for all the exposed REST API's except /authenticate.
 *
 *  If there is a token in request authorization header then it validates the token
 *
 */
router.use(function (req, res, next) {
    // Skip authentication for certain path
    if (req.path.endsWith('/authenticate') || req.path.endsWith('/register')) {
        return next();
    }

    const token = req.headers['authorization'];
    if (token) {
        authService.verifyToken(token, function (error, tokenPayload) {
            if (error) {
                console.log('Invalid token included in REST API call: ' + req.method + ' ' + req.url);
                res.status(401).json(error);
            } else {
                req.tokenPayload = tokenPayload;
                return next();
            }
        }); //verifyToken
    } else {
        res.sendStatus(403);
    }
});

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.apiRoutes"));
});

module.exports = router;
