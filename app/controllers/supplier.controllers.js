const { getAllSupplier } = require("../services/supplier.services");

const getAllDataSupplier = async (req, res) => {
  const list = await getAllSupplier();
  res.status(200).send(list);
};

module.exports = {
  getAllDataSupplier,
};
