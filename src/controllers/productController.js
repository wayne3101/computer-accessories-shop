const CRUDservice = require("../services/CRUDservice");
const db = require("../models");

const getProduct = async (req, res) => {
  const data = await CRUDservice.getAllProduct();
  console.log(data);
  return res.render("products", {
    products: data,
  });
};
const productDetail = async (req, res) => {
  const data = await CRUDservice.getAllProduct();
  const params = req.params.slug;
  if (params) {
    const productData = await CRUDservice.getProductDetail(params);
    console.log(productData);
    return res.render("productDetail", { productData, data });
  } else {
    return res.send("data not found");
  }
};

module.exports = {
  getProduct: getProduct,
  productDetail: productDetail,
};
