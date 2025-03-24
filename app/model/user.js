const { DataTypes } = require("sequelize");

const createUser = (sequelize) => {
  return sequelize.define(
    "users",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      province: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      distric: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      commune: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      avatar: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
};

module.exports = {
  createUser,
};
