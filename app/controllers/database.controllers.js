const path = require("path");

const {
  getAll,
  getDataProductByID,
  createDataProduct,
  createRating,
  createCategory,
  updateDataProduct,
  deleteProductById,
  getDataProductImage,
  getDataSearch,
  getDataCategoryID,
  getProductWherePrice,
  searchDatabase,
  searchDatabaseByCateEndSup,
} = require("../services/database.services");

const getAllDataProduct = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;

  if (isNaN(limit) || isNaN(skip) || limit < 0 || skip < 0) {
    return res.status(400).json({ error: "Invalid limit or skip value" });
  }
  const listData = await getAll(limit, skip);

  res.status(200).send(listData);
};

const getDataProductsByID = async (req, res) => {
  const { id } = req.params;

  const listData = await getDataProductByID(id);

  if (listData) {
    res.status(200).send(listData);
  } else {
    res.send(404).send("Không tìm thấy sản phẩm nào !!!");
  }
};

const getDataWherePrice = async (req, res) => {
  const { price } = req.params;

  const listData = await getProductWherePrice(price);
  if (listData) {
    res.status(200).send(listData);
  } else {
    res.send(404).send("Không tìm thấy sản phẩm nào !!!");
  }
};

const getDataProductsByCategoryID = async (req, res) => {
  const { id } = req.params;

  const listData = await getDataCategoryID(id);

  if (listData) {
    res.status(200).send(listData);
  } else {
    res.send(404).send("Không tìm thấy sản phẩm nào !!!");
  }
};

const getDataBySearch = async (req, res) => {
  const { name } = req.query;

  const listData = await getDataSearch(name);

  if (listData) {
    res.status(200).send(listData);
  } else {
    res.send(404).send("Không tìm thấy sản phẩm nào !!!");
  }
};

const getDataProductsByImage = async (req, res) => {
  const { images } = req.params;

  const imageInfo = await getDataProductImage(images);

  const imagesDir = path.join(__dirname, "../public/uploads/");

  if (imageInfo) {
    const imagePath = path.join(imagesDir, imageInfo);
    res.sendFile(imagePath, (err) => {
      if (err) {
        res.status(404).send("ngu");
      }
    });
  } else {
    res.status(404).json({ message: "Image not found" });
  }
};

const createDataProducts = async (req, res) => {
  const list = req.body;

  const listData = {
    name: list.title,
    description: list.description ? list.description : null,
    price: list.price ? list.price : 0,
    cost_price: list.cost_price ? list.cost_price : 0,
    compare_price: list.compare_price ? list.cost_price : 0,
    image: req.file?.filename ? req.file.filename : "",
    stock_quantity: list.stock_quantity ? list.stock_quantity : 0,
    category_id: list.category_id ? list.category_id : 1,
    supplier_id: list.supplier_id ? list.supplier_id : 1,
    url: list.url,
  };

  console.log(listData);

  if (listData.title !== "") {
    const newList = await createDataProduct(listData, res);
    res.status(201).send(newList);
  } else {
    res.status(404).send("Looxi");
  }
};

const createDataCategory = async (req, res) => {
  const list = req.body;

  const newList = await createCategory(list);

  res.status(201).send(newList);
};

const updateDatabase = async (req, res) => {
  const { id } = req.params;
  const list = req.body;

  const listData = {
    name: list.title,
    description: list.description ? list.description : null,
    price: list.price ? list.price : 0,
    cost_price: list.cost_price ? list.cost_price : 0,
    compare_price: list.compare_price ? list.compare_price : 0,
    image: req.file?.filename !== undefined ? req.file?.filename : list.img,
    stock_quantity: list.stock_quantity ? list.stock_quantity : 0,
    category_id: list.category_id,
    supplier_id: list.supplier_id,
    url: list.url,
  };

  const data = await updateDataProduct(id, listData);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("not found!");
  }
};

const deleteDatabase = async (req, res) => {
  const { id } = req.params;
  const data = await deleteProductById(id);
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("Not Found!");
  }
};

const searchData = async (req, res) => {
  const { q } = req.query;

  const data = await searchDatabase(q);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("Not Found!");
  }
};

const searchDataByCateEndSp = async (req, res) => {
  const { minPrice = 0, maxPrice = 999999999, brand, category } = req.query;
  const limit = parseInt(req.query.limit) || 50;
  const skip = parseInt(req.query.skip) || 0;
  const data = await searchDatabaseByCateEndSup(
    category,
    brand,
    minPrice,
    maxPrice,
    limit,
    skip
  );

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getAllDataProduct,
  getDataProductsByID,
  createDataProducts,
  createDataCategory,
  updateDatabase,
  deleteDatabase,
  getDataProductsByImage,
  getDataBySearch,
  getDataProductsByCategoryID,
  getDataWherePrice,
  searchData,
  searchDataByCateEndSp,
};
