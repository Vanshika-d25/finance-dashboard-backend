const express = require("express");
const router = express.Router();

const { createUser, getUsers, updateUser, deleteUser} = require("./user.controller");

router.get("/", getUsers);

// POST /users
router.post("/", createUser);

router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;