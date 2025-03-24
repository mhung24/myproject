const { DataTypes } = require("sequelize");

const oders = (sequelize) => {
  return sequelize.define(
    "orders",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },

      customer_name: { type: DataTypes.STRING, allowNull: false },
      customer_email: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },

      phone: { type: DataTypes.STRING, allowNull: false },
      total_price: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
      delivery: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      pay: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      payable: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      unpaid: {
        type: DataTypes.ENUM("unpaid", "paid"),
        defaultValue: "unpaid",
      },

      status: {
        type: DataTypes.ENUM("pending", "in transit", "completed", "cancelled"),
        defaultValue: "pending",
      },
    },
    {
      tableName: "orders",
      timestamps: true, // Tự động thêm createdAt và updatedAt
    }
  );
};

module.exports = { oders };
