const { getAllRatings, createRating } = require("../services/rating.services");

const getRatings = async (req, res) => {
  const { id } = req.params;
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;

  if (isNaN(limit) || isNaN(skip) || limit < 0 || skip < 0) {
    return res.status(400).json({ error: "Invalid limit or skip value" });
  }

  const list = await getAllRatings(id, limit, skip);

  if (list) {
    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const createNewRating = async (req, res) => {
  const list = req.body;

  const data = createRating(list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send(null);
  }
};

module.exports = {
  getRatings,
  createNewRating,
};
