const express = require("express");
const registerController = require("../controllers/registerController");
const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");

let router = express.Router();

const initWebRoutes = (app) => {
  router.get("/products/:slug", productController.productDetail);

  router.get("/about", homeController.getAboutPage);
  router.get("/register", registerController.getRegisterPage);
  router.get("/products", productController.getProduct);
  router.get("/", homeController.getHomePage);
  return app.use("/", router);
};
module.exports = initWebRoutes;
