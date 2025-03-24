const { where } = require("sequelize");
const { Category } = require("../model");

const getAllCategory = async () => {
  const data = await Category.findAll();
  const list = data.map((i) => {
    return {
      id: i.category_id,
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
  getAllCategory,
};
