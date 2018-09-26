const router = require("express").Router();
const usersController = require("../../controllers/usersController");

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
module.exports = router;
