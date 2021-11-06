"use strict";

const category = require("../models/category");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      { categoryName: "OFFICE", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "GAMING", createdAt: new Date(), updatedAt: new Date() },
      {
        categoryName: "WORSTATION",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Users", null, {});
  },
};
