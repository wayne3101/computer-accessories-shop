const CRUDservice = require("../services/CRUDservice");
const getHomePage = async (req, res) => {
  const data = await CRUDservice.getAllProduct();
  return res.render("home", { data });
};
const getAboutPage = (req, res) => {
  return res.render("about");
};
const getContactPage = (req, res) => {
  return res.render("contact");
};

const postCRUD = async (req, res) => {};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getContactPage: getContactPage,
};
