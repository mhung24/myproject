const {
  getAllUser,
  getUserById,
  createNewUser,
  updateUser,
  deleteUserById,
} = require("../services/user.services");

const getAllUsers = async (req, res) => {
  const list = await getAllUser();

  res.status(200).send(list);
};

const getUserByID = async (req, res) => {
  const { id } = req.params;

  const list = await getUserById(id);

  if (list) {
    res.status(200).send(list);
  } else {
    res.send(404).send("Không tìm thấy !!!");
  }
};

const createDataUsers = async (req, res) => {
  const list = req.body;
  const newList = await createNewUser(list);
  res.status(201).send(newList);
};

const updateDataUser = async (req, res) => {
  const { id } = req.params;
  const list = req.body;

  console.log(list, "jig");

  const data = await updateUser(id, list);

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).send("not found!");
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

module.exports = {
  getAllUsers,
  getUserByID,
  createDataUsers,
  updateDataUser,
  deleteDataUser,
};
