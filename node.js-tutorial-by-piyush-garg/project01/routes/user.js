const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleRemoveUserById,
  handleCreateNewUser,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleRemoveUserById);

module.exports = router;
