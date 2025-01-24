const { DataTypes } = require("sequelize");

const Categories = (sequelize) => {
  sequelize.define(
    "Category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Categories",
      timestamps: false,
    }
  );
};

module.exports = {
  Categories,
};
