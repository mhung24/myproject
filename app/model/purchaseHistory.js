// // models/Purchase_History.js
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// class Purchase_History extends Model {}

// Purchase_History.init(
//   {
//     purchase_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Users",
//         key: "user_id",
//       },
//     },
//     product_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Products",
//         key: "product_id",
//       },
//     },
//     purchase_date: DataTypes.DATE,
//     quantity: DataTypes.INTEGER,
//     total_amount: DataTypes.DECIMAL(10, 2),
//   },
//   {
//     sequelize,
//     modelName: "Purchase_History",
//     timestamps: true,
//   }
// );
// module.exports = Purchase_History;
