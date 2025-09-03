"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash("admin123", 10);

    await queryInterface.bulkInsert("admins", [
      {
        ten_dang_nhap: "admin",
        mat_khau: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
