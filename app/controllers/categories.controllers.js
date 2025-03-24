const { getAllCategory } = require("../services/categories.services");

const getAllDataCategory = async (req, res) => {
  const list = await getAllCategory();
  res.status(200).send(list);
};

module.exports = {
  getAllDataCategory,
};
