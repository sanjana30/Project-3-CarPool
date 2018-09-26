const router = require("express").Router();
const userRoutes = require("./users");

// Article routes
router.use("/users", userRoutes);

module.exports = router;
