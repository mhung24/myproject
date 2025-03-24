const { where } = require("sequelize");
const { DataUsers, HistoryLogin, Oders } = require("../model");

const getAllUser = async () => {
  const data = await DataUsers.findAll();
  if (data) {
    return data;
  } else {
    return "Not found!";
  }
};

const getUserById = async (email, password) => {
  const data = await DataUsers.findOne({
    where: {
      email,
      password,
    },

    include: [
      {
        model: HistoryLogin,
        // attributes: ["ip_client", "createdAt", "is_login"],
      },
    ],
  });

  if (data) {
    const listData = {
      id: data.user_id,
      username: data.username,
      password: data.password,
      email: data.email,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      role: data.role,
      province: data.province,
      distric: data.distric,
      commune: data.commune,
      login: data?.history_logins.map((i) => ({
        ip_client: i.ip_client,
        createdAt: i.createdAt,
        is_login: i.is_login,
      })),
    };

    if (listData) {
      return listData;
    } else {
      return null;
    }
  }
};

const getUserId = async (id) => {
  const data = await DataUsers.findOne({
    where: {
      user_id: id,
    },

    include: [
      {
        model: HistoryLogin,
        // attributes: ["ip_client", "createdAt", "is_login"],
      },
    ],
  });

  if (data) {
    const listData = {
      id: data.user_id,
      username: data.username,
      password: data.password,
      email: data.email,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      role: data.role,
      province: data.province,
      distric: data.distric,
      commune: data.commune,
      login: data?.history_logins.map((i) => ({
        ip_client: i.ip_client,
        createdAt: i.createdAt,
        is_login: i.is_login,
      })),
    };

    if (listData) {
      return listData;
    } else {
      return null;
    }
  }
};

const createNewUser = async (list) => {
  const data = {
    username: list.username,
    email: list.email,
    password: list.password,
    fullName: list.fullname,
    phone: list.phone,
    address: list.address ? list.address : "",
    role: 1,
    province: 0,
    distric: 0,
    commune: 0,
    avatar: "1741728900832_no_avatar.png",
  };

  if (data) {
    const newList = await DataUsers.create(data);
    return newList;
  }
};

const updateUser = async (id, list) => {
  const data = await DataUsers.findOne({
    where: {
      user_id: id,
    },
  });

  if (data) {
    (data.fullName = list.fullName), (data.address = list.address);
    (data.province = list.province),
      (data.distric = list.distric),
      (data.commune = list.commune),
      data.save();

    return data;
  } else {
    return null;
  }
};

const updatePassword = async (id, list) => {
  const data = await DataUsers.findOne({
    where: {
      user_id: id,
    },
  });

  if (data) {
    data.password = list.password;

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

const getHistory = async (id) => {
  const data = await HistoryLogin.findAll({});

  if (data) {
    return data;
  } else {
    return "Not found!";
  }
};

const getAllHistory = async (id) => {
  const data = await HistoryLogin.findAll({
    where: {
      user_id: id,
    },
  });

  if (data) {
    return data;
  } else {
    return "Not found!";
  }
};

const createNewHistoryLogin = async (list) => {
  const newList = await HistoryLogin.create(list);
  return newList;
};

const updateHistoryLogin = async (ip) => {
  const data = await HistoryLogin.update(
    { is_login: "false" },
    {
      where: {
        ip_client: ip,
      },
    }
  );

  if (data) {
    // data.is_login = list.is_login;
    // data.save();
    return data;
  } else {
    return null;
  }
};

const checkGmail = async (email) => {
  const data = await DataUsers.findOne({
    where: {
      email,
    },
  });

  if (data) {
    return data;
  } else {
    return null;
  }
};

const checkUserName = async (username) => {
  const data = await DataUsers.findOne({
    where: {
      username,
    },
  });

  if (data) {
    return data;
  } else {
    return null;
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createNewUser,
  updateUser,
  deleteUserById,
  createNewHistoryLogin,
  updateHistoryLogin,
  getAllHistory,
  getHistory,
  getUserId,
  checkGmail,
  checkUserName,
  updatePassword,
};
