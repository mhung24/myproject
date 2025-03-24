const express = require("express");
const {
  getAllUsers,
  getUserByID,
  createDataUsers,
  updateDataUser,
  deleteDataUser,
  createHistoryLogin,
  updateHistory,
  getAllListHistory,
  getAllHistoryLogin,
  getMyUserByID,
  updateNewPassword,
} = require("../controllers/user.controllers");

const routerUsers = express.Router();

routerUsers.get("/", getAllUsers);
routerUsers.get("/history/:id", getAllListHistory);
routerUsers.get("/listhistory", getAllHistoryLogin);
routerUsers.get("/account/:id", getMyUserByID);

routerUsers.post("/login", getUserByID);
routerUsers.post("/create", createDataUsers);
routerUsers.put("/update/account/:id", updateDataUser);
routerUsers.delete("/:id", deleteDataUser);
routerUsers.post("/history/:id", createHistoryLogin);
routerUsers.put("/upload/history/:ip", updateHistory);
routerUsers.put("/update/password/:id", updateNewPassword);

module.exports = routerUsers;
