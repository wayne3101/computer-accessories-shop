const getHomePage = (req, res) => {
  return res.render("home");
};
const getAboutPage = (req, res) => {
  return res.render("about");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
