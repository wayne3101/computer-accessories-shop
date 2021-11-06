const bcrypt = require("bcryptjs");
const db = require("../models");
const salt = bcrypt.genSaltSync(10);

const createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        userName: data.userName,
        password: data.hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        phone: data.phone,
        gender: data.gender === 1 ? true : false,
      });
      resolve("create new user succed!");
    } catch (e) {
      reject(e);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const products = db.Product.findAll({
        raw: true,
      });
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

const getProductDetail = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = db.Product.findOne({
        where: {
          slug: params,
        },
        raw: true,
      });
      if (product) {
        resolve(product);
      } else {
        resolve([]);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createUser: createUser,
  getAllProduct: getAllProduct,
  getProductDetail: getProductDetail,
};
