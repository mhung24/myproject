const { where } = require("sequelize");
const { Oders, Order_Items } = require("../model");

const createOder = async (list) => {
  const newList = await Oders.create(list);
  return newList;
};

const createOderItem = async (list) => {
  const data = await Order_Items.bulkCreate(list);
  return "oke";
  //   }
};

const getOrderByUserID = async (id, limit, skip) => {
  const list = await Oders.findAll({
    limit: limit,
    offset: skip,
    where: {
      user_id: id,
    },
    include: [
      {
        model: Order_Items,
      },
    ],
  });

  const totalCount = list?.length;

  if (list) {
    return {
      orders: list,
      total: totalCount,
      limit: limit,
      skip: skip,
    };
  } else {
    return "Not found!";
  }
};

const getAllData = async (limit, skip) => {
  const data = await Oders.findAll({
    limit,
    offset: skip,
    include: [
      {
        model: Order_Items,
      },
    ],
  });

  const totalCount = data?.length;

  if (data) {
    return {
      orders: data,
      total: totalCount,
      limit: limit,
      skip: skip,
    };
  } else {
    return "Not found!";
  }
};

const getDataByID = async (id) => {
  const data = await Oders.findAll({
    where: {
      id,
    },
    include: [
      {
        model: Order_Items,
      },
    ],
  });

  if (data) {
    return {
      orders: data,
    };
  } else {
    return "Not found!";
  }
};

const updateCancelDataOrder = async (id, list) => {
  const data = await Oders.findOne({
    where: {
      id,
    },
  });

  if (data) {
    data.status = list.status;
    data.save();

    return data;
  } else {
    return null;
  }
};

const updateIntraDataOrder = async (id, list) => {
  const data = await Oders.findOne({
    where: {
      id,
    },
  });

  if (data) {
    data.status = list.status;
    data.save();

    return data;
  } else {
    return null;
  }
};

const updateCompleDataOrder = async (id, list) => {
  const data = await Oders.findOne({
    where: {
      id,
    },
  });

  if (data) {
    data.status = list.status;
    data.unpaid = list.unpaid;
    data.save();

    return data;
  } else {
    return null;
  }
};

module.exports = {
  createOder,
  createOderItem,
  getOrderByUserID,
  getAllData,
  updateCancelDataOrder,
  updateIntraDataOrder,
  updateCompleDataOrder,
  getDataByID,
};
