const { DataTypes } = require("sequelize");

const DataCatygory = (sequelize) => {
  return sequelize.define(
    "Category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "Category",
      timestamps: false,
    }
  );
};

module.exports = DataCatygory;
