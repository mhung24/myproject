const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./app/public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const {
  getAllDataProduct,
  getDataProductsByID,
  createDataProducts,
  createDataCategory,
  updateDatabase,
  deleteDatabase,
  getDataProductsByImage,
  getDataBySearch,
  getDataProductsByCategoryID,
  getDataWherePrice,
  searchData,
  searchDataByCateEndSp,
} = require("../controllers/database.controllers");
const routerDatabase = express.Router();

routerDatabase.get("/", getAllDataProduct);
routerDatabase.get("/details/:id", getDataProductsByID);
routerDatabase.get("/price/min/:price", getDataWherePrice);
routerDatabase.get("/category/:id", getDataProductsByCategoryID);
routerDatabase.get("/image/:images", getDataProductsByImage);
routerDatabase.get("/search", getDataBySearch);
routerDatabase.get("/client/search", searchData);
routerDatabase.post("/uploads", upload.single("image"), createDataProducts);
routerDatabase.put("/update/:id", upload.single("image"), updateDatabase);
routerDatabase.post("/category", createDataCategory);
routerDatabase.delete("/delete/:id", deleteDatabase);
routerDatabase.get("/getall", searchDataByCateEndSp);

module.exports = routerDatabase;
