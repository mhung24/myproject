const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const router = require("./routers");
app.use(express.json());
const port = 3000;

app.use(cors()); // Thêm middleware CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const { sequelize } = require("./model");

sequelize.sync({ alter: true });
