const express = require("express");
const {
  createNewOder,
  getDataByID,
  getAllDataOrder,
  cancelOrders,
  inTraOrders,
  compleOrders,
} = require("../controllers/oders.controllers");

const routerDataOrder = express.Router();
routerDataOrder.post("/create", createNewOder);
routerDataOrder.get("/:id", getDataByID);
routerDataOrder.get("/", getAllDataOrder);
routerDataOrder.put("/cancel/:id", cancelOrders);
routerDataOrder.put("/in-transit/:id", inTraOrders);
routerDataOrder.put("/completed/:id", compleOrders);

module.exports = routerDataOrder;
