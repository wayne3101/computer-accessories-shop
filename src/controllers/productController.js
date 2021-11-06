const CRUDservice = require("../services/CRUDservice");

const getProduct = async (req, res) => {
  const data = await CRUDservice.getAllProduct();
  console.log(data);
  return res.render("products", {
    products: data,
  });
};
const productDetail = async (req, res) => {
  const data = await CRUDservice.getProductDetail();
  console.log(data);
  return res.render("productDetail");
};

module.exports = {
  getProduct: getProduct,
  productDetail: productDetail,
};
