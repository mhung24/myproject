const express = require("express");
const {
  getAllUsers,
  getUserByID,
  createDataUsers,
  updateDataUser,
  deleteDataUser,
} = require("../controllers/user.controllers");
const { validatePassword } = require("../middlewares/log/checkPassword");

const routerDatabase = express.Router();

routerDatabase.get("/", getAllUsers);
routerDatabase.get("/:id", getUserByID);
routerDatabase.post("/", createDataUsers);
routerDatabase.put("/:id", updateDataUser);
routerDatabase.delete("/:id", deleteDataUser);

module.exports = routerDatabase;
