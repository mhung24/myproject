const { DataTypes } = require("sequelize");

const createDatabase = (sequelize) => {
  return sequelize.define(
    "product",
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
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      cost_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      compare_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "product",
      timestamps: true,
    }
  );
};

module.exports = {
  createDatabase,
};
