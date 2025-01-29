// // models/Payment.js
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../model");

// class Payment extends Model {}

// Payment.init(
//   {
//     payment_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     order_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Orders",
//         key: "order_id",
//       },
//     },
//     amount: DataTypes.DECIMAL(10, 2),
//     payment_date: DataTypes.DATE,
//     payment_method: DataTypes.STRING,
//     status: DataTypes.STRING,
//   },
//   {
//     sequelize,
//     modelName: "Payment",
//     timestamps: false,
//   }
// );
// module.exports = Payment;
