const express = require("express");
const {
  getAllUsers,
  getUserByID,
  createDataUsers,
  updateDataUser,
  deleteDataUser,
} = require("../controllers/user.controllers");
const { validatePassword } = require("../middlewares/log/checkPassword");

const routerUsers = express.Router();

routerUsers.get("/", getAllUsers);
routerUsers.get("/:id", getUserByID);
routerUsers.post("/", createDataUsers);
routerUsers.put("/:id", updateDataUser);
routerUsers.delete("/:id", deleteDataUser);

module.exports = routerUsers;
