const { DataTypes } = require("sequelize");

const historyLogin = (sequelize) => {
  return sequelize.define(
    "history_login",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ip_client: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "history_login",
      timestamps: true,
    }
  );
};

module.exports = {
  historyLogin,
};
