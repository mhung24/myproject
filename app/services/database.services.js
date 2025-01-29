const { where } = require("sequelize");

const { Product, Category, Ratings, Supplier } = require("../model");

const getAll = async (limit, skip) => {
  const data = await Product.findAll({
    limit: limit,
    offset: skip,
    include: [
      {
        model: Ratings,
        attributes: ["score", "comment"],
      },

      {
        model: Category,
        attributes: ["name"], // Chọn các trường cần thiết từ Rating
      },
    ],
  });

  const listData = data.map((product) => {
    return {
      id: product.product_id,
      title: product.name,
      description: product.description,
      price: product.price,
      costPrice: product.cost_price,
      comparePrice: product.compare_price,
      image: product.image,
      quantity: product.stock_quantity,
      category: product.Category.name, // Lấy tên danh mục
      ratings: product.Ratings.map((rating) => ({
        score: rating.score,
        comment: rating.comment,
      })),
    };
  });

  if (listData) {
    return listData;
  } else {
    return "Not Found";
  }
};

const getDataProductID = async (id) => {
  const data = await Product.findOne({
    where: {
      product_id: id,
    },
  });

  if (data) {
    return data;
  } else {
    return "Not Found";
  }
};

const getDataProductByID = async (id, limit, skip) => {
  const data = await Product.findAll({
    where: { product_id: id },
    limit: limit,
    offset: skip,
    include: [
      {
        model: Ratings,
        attributes: ["score", "comment"],
      },

      {
        model: Category,
        attributes: ["name"], // Chọn các trường cần thiết từ Rating
      },

      {
        model: Supplier,
        attributes: ["name"],
      },
    ],
  });

  const listData = data.map((product) => {
    return {
      id: product.product_id,
      title: product.name,
      description: product.description,
      price: product.price,
      costPrice: product.cost_price,
      comparePrice: product.compare_price,
      image: product.image,
      quantity: product.stock_quantity,
      category: product.Category.name,
      supplier: product.Supplier.name,
      ratings: product.Ratings.map((rating) => ({
        score: rating.score,
        comment: rating.comment,
      })),
    };
  });

  if (listData) {
    return listData;
  } else {
    return "Not Found";
  }
};

const createDataProduct = async (list) => {
  console.log(list);

  const newList = await Product.create(list);
  return newList;
};

const createRating = async (list) => {
  // const newList = await Ratings.create(list);
  // return newList;
};

const createCategory = async (list) => {
  const newList = await Category.create(list);
  return newList;
};

const updateDataProduct = async (id, list) => {
  console.log(id);

  const data = await Product.findOne({
    where: {
      product_id: id,
    },
  });

  if (data) {
    (data.name = list.name),
      (data.description = list.description),
      (data.price = list.price),
      (data.cost_price = list.cost_price),
      (data.compare_price = list.compare_price),
      (data.stock_quantity = list.stock_quantity),
      (data.category_id = list.category_id),
      data.save();

    return data;
  } else {
    return null;
  }
};

const deleteProductById = async (id) => {
  const data = await getDataProductID(id);
  if (data) {
    await data.destroy({
      where: {
        product_id: id,
      },
    });
    return data;
  } else {
    return false;
  }
};
module.exports = {
  getAll,
  getDataProductByID,
  createDataProduct,
  createRating,
  createCategory,
  updateDataProduct,
  deleteProductById,
};
