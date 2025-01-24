const { DataTypes } = require("sequelize");
const { Category, Categories } = require("./category");

const createDatabase = (sequelize) => {
  return sequelize.define(
    "products",
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      cost_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      compare_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );
};

module.exports = {
  createDatabase,
};
