const { DataUsers } = require("../model");

const getAllUser = async () => {
  const data = await DataUsers.findAll();

  if (data) {
    return data;
  } else {
    return "Not found!";
  }
};

const getUserById = async (id) => {
  const data = await DataUsers.findOne({
    where: {
      id,
    },
  });

  if (data) {
    return data;
  } else {
    return "Not Found!";
  }
};

const createNewUser = async (list) => {
  const newList = await DataUsers.create(list);
  return newList;
};

const updateUser = async (id, list) => {
  const data = await DataUsers.findOne({
    where: {
      id,
    },
  });

  if (data) {
    (data.password = list.password),
      (data.fullName = list.fullName),
      (data.phone = list.phone),
      (data.address = list.address);

    data.save();

    return data;
  } else {
    return null;
  }
};

const deleteUserById = async (id) => {
  const data = await getUserById(id);
  if (data) {
    await data.destroy({
      where: {
        id,
      },
    });
    return data;
  } else {
    return false;
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createNewUser,
  updateUser,
  deleteUserById,
};
