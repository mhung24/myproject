const express = require("express");
const { getAllDataSupplier } = require("../controllers/supplier.controllers");
const routerDataSupplier = express.Router();

routerDataSupplier.get("/", getAllDataSupplier);

module.exports = routerDataSupplier;
