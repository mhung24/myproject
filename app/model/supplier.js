const { DataTypes } = require("sequelize");

const DataSupplier = (sequelize) => {
  return sequelize.define(
    "Supplier",
    {
      supplier_id: {
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
      modelName: "Supplier",
      timestamps: false,
    }
  );
};

module.exports = DataSupplier;
