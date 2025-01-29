const {
  getAll,
  getDataProductByID,
  createDataProduct,
  createRating,
  createCategory,
  updateDataProduct,
  deleteProductById,
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
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  if (isNaN(limit) || isNaN(skip) || limit < 0 || skip < 0) {
    return res.status(400).json({ error: "Invalid limit or skip value" });
  }
  const listData = await getDataProductByID(id, limit, skip);

  if (listData) {
    res.status(200).send(listData);
  } else {
    res.send(404).send("Không tìm thấy sản phẩm nào !!!");
  }
};

const createDataProducts = async (req, res) => {
  const list = req.body;

  const newList = await createDataProduct(list);

  res.status(201).send(newList);
};

const createDataCategory = async (req, res) => {
  const list = req.body;

  const newList = await createCategory(list);

  res.status(201).send(newList);
};

const updateDatabase = async (req, res) => {
  const { id } = req.params;

  const list = req.body;

  const data = await updateDataProduct(id, list);

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

module.exports = {
  getAllDataProduct,
  getDataProductsByID,
  createDataProducts,
  createDataCategory,
  updateDatabase,
  deleteDatabase,
};
