const express = require("express");
const {
  getRatings,
  createNewRating,
} = require("../controllers/rating.controllers");
const routerDataRating = express.Router();

routerDataRating.get("/:id", getRatings);
routerDataRating.post("/create", createNewRating);

module.exports = routerDataRating;
