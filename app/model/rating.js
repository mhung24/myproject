const { DataTypes } = require("sequelize");

const Rating = (sequelize) => {
  return sequelize.define(
    "Rating",
    {
      rating_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,

        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,

        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      modelName: "Rating",
      timestamps: false,
    }
  );
};

module.exports = Rating;
