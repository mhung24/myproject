// // models/Search_History.js
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// class Search_History extends Model {}

// Search_History.init(
//   {
//     search_id: {
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
//     search_query: DataTypes.STRING,
//     search_date: DataTypes.DATE,
//   },
//   {
//     sequelize,
//     modelName: "Search_History",
//     timestamps: true,
//   }
// );
// module.exports = Search_History;
