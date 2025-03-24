const {
  createOder,
  createOderItem,
  getOrderByUserID,
  getAllData,
  updateCancelDataOrder,
  updateIntraDataOrder,
  updateCompleDataOrder,
} = require("../services/oders.services");

const createNewOder = async (req, res) => {
  const list = req.body;

  const newList = {
    user_id: list.user_id,
    customer_name: list.fullName,
    customer_email: list.email,
    address: list.address,
    phone: list.phone,
    total_price: list.total,
    delivery: list.delivery ? list.delivery : "",
    pay: list.pay ? list.pay : "",
    payable: list.pay === "ATM" ? 0 : list.total,
    unpaid: list.pay === "ATM" ? "paid" : "unpaid",
    status: list.status ? list.status : "pending",
  };

  const data = await createOder(newList);

  if (data) {
    let newData = [];
    list.list_product.map((i) => {
      newData = [
        ...newData,
        {
          order_id: data.id,
          product_id: i.product_id,
          name: i.name,
          images: i.images,
          price: i.price,
          stock: i.stock,
        },
      ];
    });

    const database = await createOderItem(newData);

    if (database) {
      res.status(200).send("oke");
    }
  } else {
    res.status(404).send(null);
  }
};

const getDataByID = async (req, res) => {
  const { id } = req.params;

  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const list = await getOrderByUserID(id, limit, skip);

  if (list) {
    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const getAllDataOrder = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const list = await getAllData(limit, skip);

  if (list) {
    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const getDataOrderByID = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const list = await getDataByID(id);

  if (list) {
    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const cancelOrders = async (req, res) => {
  const { id } = req.params;

  const list = req.body;
  const data = await updateCancelDataOrder(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send(null);
  }
};

const inTraOrders = async (req, res) => {
  const { id } = req.params;

  const list = req.body;
  const data = await updateIntraDataOrder(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send(null);
  }
};

const compleOrders = async (req, res) => {
  const { id } = req.params;

  const list = req.body;
  const data = await updateCompleDataOrder(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send(null);
  }
};

module.exports = {
  createNewOder,
  getDataByID,
  getAllDataOrder,
  cancelOrders,
  inTraOrders,
  compleOrders,
  getDataOrderByID,
};
