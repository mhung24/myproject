const { DataTypes } = require("sequelize");

const oders = (sequelize) => {
  return sequelize.define(
    "oders",
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      tableName: "Orders",
      timestamps: true, // Tự động thêm createdAt và updatedAt
    }
  );
};

module.exports = { oders };
