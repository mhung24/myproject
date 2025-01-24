const express = require("express");
const router = express.Router();
const routerDatabase = require("./user.router");

router.use("/users", routerDatabase);
module.exports = router;
