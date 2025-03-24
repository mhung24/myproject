const { text } = require("express");
const {
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
} = require("../services/user.services");

const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const list = await getAllUser();

  res.status(200).send(list);
};

const getUserByID = async (req, res) => {
  const { username, password } = req.body;

  const user = await getUserById(username, password);

  if (user) {
    const token = jwt.sign({ username: user.username }, "secret_key", {
      expiresIn: "1h",
    });

    const list = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      fullName: user.fullName,
      phone: user.phone,
      address: user.address,
      role: user.role,
      token: token,
      avavtar: user.avavtar,
      province: user.province,
      distric: user.distric,
      commune: user.commune,
      login: user.login.map((i) => ({
        ip_client: i.ip_client,
        is_login: i.is_login,
        createdAt: i.createdAt,
      })),
    };

    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const getMyUserByID = async (req, res) => {
  const { id } = req.params;

  const user = await getUserId(id);

  if (user) {
    const token = jwt.sign({ username: user.username }, "secret_key", {
      expiresIn: "1h",
    });

    const list = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      fullName: user.fullName,
      phone: user.phone,
      address: user.address,
      role: user.role,
      token: token,
      avavtar: user.avavtar,
      province: user.province,
      distric: user.distric,
      commune: user.commune,
      login: user.login.map((i) => ({
        ip_client: i.ip_client,
        is_login: i.is_login,
        createdAt: i.createdAt,
      })),
    };

    res.status(200).send(list);
  } else {
    res.status(404).send(null);
  }
};

const createDataUsers = async (req, res) => {
  const list = req.body;
  const { username, email } = list;
  const mail = await checkGmail(email);
  const user = await checkUserName(username);

  if (mail && user) {
    res.status(404).send({
      text_user: "Tài khoản đã được đăng ký",
      text_mail: "Email đã được đăng ký",
    });
  } else if (mail) {
    res.status(404).send({
      text_mail: "Email đã được đăng ký",
      text_user: "",
    });
  } else if (user) {
    res.status(404).send({
      text_user: "Tài khoản đã được đăng ký",
      text_mail: "",
    });
  } else if (mail === null && user === null) {
    const newList = await createNewUser(list);

    res.status(201).send(newList);
  }
};

const updateDataUser = async (req, res) => {
  const { id } = req.params;
  const list = req.body;

  const data = await updateUser(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404);
  }
};

const deleteDataUser = async (req, res) => {
  const { id } = req.params;
  const data = await deleteUserById(id);
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("Not Found!");
  }
};

const createHistoryLogin = async (req, res) => {
  const list = req.body;
  const newList = await createNewHistoryLogin(list);
  res.status(201).send(newList);
};

const getAllListHistory = async (req, res) => {
  const { id } = req.params;
  const list = await getAllHistory(id);

  res.status(200).send(list);
};

const getAllHistoryLogin = async (req, res) => {
  const list = await getHistory();

  res.status(200).send(list);
};

const updateHistory = async (req, res) => {
  const { ip } = req.params;
  const data = await updateHistoryLogin(ip);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404);
  }
};

const updateNewPassword = async (req, res) => {
  const { id } = req.params;
  const list = req.body;
  const data = await updatePassword(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404);
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  createDataUsers,
  updateDataUser,
  deleteDataUser,
  createHistoryLogin,
  updateHistory,
  getAllListHistory,
  getAllHistoryLogin,
  getMyUserByID,
  updateNewPassword,
};
