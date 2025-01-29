const express = require("express");
const {
  getAllDataProduct,
  getDataProductsByID,
  createDataProducts,
  createDataCategory,
  updateDatabase,
  deleteDatabase,
} = require("../controllers/database.controllers");
const routerDatabase = express.Router();

routerDatabase.get("/", getAllDataProduct);

routerDatabase.get("/:id", getDataProductsByID);
routerDatabase.post("/", createDataProducts);
routerDatabase.put("/:id", updateDatabase);
routerDatabase.post("/category", createDataCategory);
routerDatabase.delete("/:id", deleteDatabase);
module.exports = routerDatabase;
