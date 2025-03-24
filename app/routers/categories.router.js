const express = require("express");
const { getAllDataCategory } = require("../controllers/categories.controllers");
const routerDataCate = express.Router();

routerDataCate.get("/", getAllDataCategory);

module.exports = routerDataCate;
