const express = require("express");
const router = express.Router();
const routerUser = require("./user.router");
const routerData = require("./product.routers");
const routerCate = require("./categories.router");
const routerSupplier = require("./supplier.routers");
const routerRating = require("./rating.router");
const routerOder = require("./oder.router");

router.use("/users", routerUser);
router.use("/products", routerData);
router.use("/category", routerCate);
router.use("/supplier", routerSupplier);
router.use("/rating", routerRating);
router.use("/orders", routerOder);

module.exports = router;
