const express = require("express");
const router = express.Router();
const routerUser = require("./user.router");
const routerData = require("./product.routers");

router.use("/users", routerUser);
router.use("/products", routerData);

module.exports = router;
