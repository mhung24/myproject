const express = require("express");
const app = express();
const router = require("./routers");
app.use(express.json());
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const { sequelize } = require("./model");

sequelize.sync({ alter: true });
