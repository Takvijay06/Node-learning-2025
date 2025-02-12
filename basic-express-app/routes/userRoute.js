const express = require("express");
const { validateEmptyUser, validateAlreadyUser } = require("../middlewares");
const UserController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(UserController.getAllUsers)
  .post(validateEmptyUser, validateAlreadyUser, UserController.createUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
