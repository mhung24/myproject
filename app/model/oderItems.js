const { DataTypes } = require("sequelize");

const oderItem = (sequelize) => {
  return sequelize.define(
    "oderItems",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      images: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      tableName: "oderItems",
      timestamps: true,
    }
  );
};

module.exports = {
  oderItem,
};
