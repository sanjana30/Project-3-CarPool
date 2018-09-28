const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const authService = require("../../service/authService");

// Matches with "/api/articles"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

//Matches with "/api/articles/:id"
router
  .route("/:id")
  //   .get(usersController.findById)
  //   .put(usersController.update)
  .delete(usersController.remove);

// router.route("*")
//   .get(client/build/index.html);

// AuthenticationRoute

router.post('/authenticate', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  authService.authenticate(username, password, function (error, token, user) {
    if (error) {
      return res.status(401).json({
        success: false,
        error_code: 401,
        error_message: 'Unable to authenticate. Reason: ' + error
      });
    } else {
      return res.json({
        success: true,
        token: token
      });
    }
  }); // authenticate
});


module.exports = router;
