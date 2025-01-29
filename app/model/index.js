const { Sequelize } = require("sequelize");

const { DB, USER, PASSWORD, HOST, dialect } = require("../config/db.config");
const { createUser } = require("./user");
const { createDatabase } = require("./database");
const { oders } = require("./oders");
const { oderItem } = require("./oderItems");
const Rating = require("./rating");
const DataCatygory = require("./categories");
const DataSupplier = require("./supplier");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const DataUsers = createUser(sequelize);
const Product = createDatabase(sequelize);
const Category = DataCatygory(sequelize);
const Supplier = DataSupplier(sequelize);
const Ratings = Rating(sequelize);
const Oders = oders(sequelize);
const Order_Items = oderItem(sequelize);

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Supplier.hasMany(Product, {
  foreignKey: "supplier_id",
});

Product.belongsTo(Supplier, {
  foreignKey: "supplier_id",
});

Product.hasMany(Ratings, {
  foreignKey: "product_id",
});

Ratings.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = {
  sequelize,
  DataUsers,
  Product,
  Category,
  Ratings,
  Supplier,
};
