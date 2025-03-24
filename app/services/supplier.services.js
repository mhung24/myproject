const { where } = require("sequelize");
const { Supplier } = require("../model");

const getAllSupplier = async () => {
  const data = await Supplier.findAll();
  const list = data.map((i) => {
    return {
      id: i.supplier_id,
      name: i.name,
    };
  });
  if (list) {
    return list;
  } else {
    return "Not Found";
  }
};

module.exports = {
  getAllSupplier,
};
