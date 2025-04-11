const { Product, Category, Ratings, Supplier } = require("../model");
const { Sequelize } = require("sequelize");

const getAll = async (limit, skip) => {
  const totalCount = await Product.count();
  const data = await Product.findAll({
    limit: limit,
    offset: skip,

    include: [
      {
        model: Ratings,
        attributes: ["rating_id"],
      },

      {
        model: Category,
        attributes: ["name"],
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
      url: product.url,
      quantity: product.stock_quantity,
      category: product.Category.name,
      supplier: product.Supplier.name,
      ratings: product.Ratings.map((rating) => ({
        id_rating: rating.rating_id,
      })),
    };
  });

  if (listData) {
    return {
      product: listData,
      total: totalCount,
      limit: limit,
      skip: skip,
    };
  } else {
    return "Not Found";
  }
};

const getProductWherePrice = async (price) => {
  const data = await Product.findAll({
    where: {
      cost_price: {
        [Sequelize.Op.gte]: +price - (+price * 20) / 100, // Lớn hơn hoặc bằng 1
        [Sequelize.Op.lte]: +price + (+price * 20) / 100, // Nhỏ hơn hoặc bằng 10
      },
    },
  });

  if (data) {
    return data;
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

const getDataCategoryID = async (id) => {
  const data = await Product.findAll({
    limit: 10,

    where: {
      category_id: id,
    },
  });

  if (data) {
    return data;
  } else {
    return "Not Found";
  }
};

const getDataProductImage = async (file) => {
  const data = await Product.findOne({
    where: {
      image: file,
    },
  });

  if (data) {
    return data.image;
  } else {
    return "Not Found";
  }
};

const getDataProductByID = async (id) => {
  const data = await Product.findAll({
    where: { product_id: id },

    include: [
      {
        model: Ratings,
        attributes: ["rating_id"],
      },

      {
        model: Category,
        attributes: ["category_id", "name"],
      },

      {
        model: Supplier,
        attributes: ["supplier_id", "name"],
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
      url: product.url,
      quantity: product.stock_quantity,
      category_id: product.Category.category_id,
      category: product.Category.name,
      supplier_id: product.Supplier.supplier_id,
      supplier: product.Supplier.name,
      ratings: product.Ratings.map((rating) => ({
        id_rating: rating.rating_id,
      })),
    };
  });

  if (listData) {
    return listData;
  } else {
    return "Not Found";
  }
};

const getDataSearch = async (search) => {
  const data = await Product.findAll({
    where: {
      name: {
        [Sequelize.Op.like]: `%${search}%`,
      },
    },

    include: [
      {
        model: Ratings,
        attributes: ["rating_id"],
      },

      {
        model: Category,
        attributes: ["category_id", "name"],
      },

      {
        model: Supplier,
        attributes: ["supplier_id", "name"],
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
      url: product.url,
      quantity: product.stock_quantity,
      category_id: product.Category.category_id,
      category: product.Category.name,
      supplier_id: product.Supplier.supplier_id,
      supplier: product.Supplier.name,
      ratings: product.Ratings.map((rating) => ({
        id_rating: rating.rating_id,
      })),
    };
  });

  if (listData) {
    return listData;
  } else {
    return "Not Found";
  }
};

const createDataProduct = async (list, res) => {
  return await Product.create(list);
};

const createCategory = async (list) => {
  const newList = await Category.create(list);
  return newList;
};

const updateDataProduct = async (id, list) => {
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
      (data.image = list.image),
      (data.stock_quantity = list.stock_quantity),
      (data.category_id = list.category_id),
      (data.supplier_id = list.supplier_id),
      (data.url = list.url),
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

const searchDatabase = async (title) => {
  let listData;
  if (title) {
    const data = await Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${title}%`, // Tìm kiếm gần đúng
        },
      },
    });

    listData = data.map((product) => {
      return {
        id: product.product_id,
        title: product.name,
        costPrice: product.cost_price,
        image: product.image,
      };
    });
  } else {
    const data = await Product.findAll();

    listData = data.map((product) => {
      return {
        id: product.product_id,
        title: product.name,
        costPrice: product.cost_price,
        image: product.image,
      };
    });
  }

  if (listData) {
    return listData;
  } else {
    return "Not found";
  }
};

const searchDatabaseByCateEndSup = async (
  category,
  brand,
  minPrice,
  maxPrice,
  limit,
  skip
) => {
  const totalCount = await Product.count();

  const whereClause = {
    cost_price: {
      [Sequelize.Op.gte]: Number(minPrice),
      [Sequelize.Op.lte]: Number(maxPrice),
    },
  };

  if (brand) whereClause.supplier_id = brand;
  if (category) whereClause.category_id = category;

  const data = await Product.findAll({
    limit: limit,
    offset: skip,
    where: whereClause,
  });

  if (data) {
    return {
      product: data,
      total: totalCount,
      limit: limit,
      skip: skip,
    };
  } else {
    return "Not found";
  }
};
module.exports = {
  getAll,
  getDataProductByID,
  createDataProduct,
  createCategory,
  updateDataProduct,
  deleteProductById,
  getDataProductImage,
  getDataSearch,
  getDataCategoryID,
  getProductWherePrice,
  searchDatabase,
  searchDatabaseByCateEndSup,
};
