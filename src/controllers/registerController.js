const CRUDservice = require("../services/CRUDservice");

const getRegisterPage = (req, res) => {
  return res.render("register");
};

const postCRUD = async (req, res) => {
  let message = await CRUDservice.createUser(req.body);
  console.log(message);
};

module.exports = {
  postCRUD: postCRUD,
  getRegisterPage: getRegisterPage,
};
