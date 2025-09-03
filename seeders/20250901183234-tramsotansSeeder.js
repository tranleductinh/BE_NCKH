"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tramsotans", [
      {
        ten_khu_vuc: "Khu vực A",
        so_dien_thoai: "0909876543",
        kinh_do: "106.660172",
        vi_do: "10.762622",
        mo_ta: "Trạm số tân tại khu vực A",
        suc_chua: 100,
        dang_chua: 20,
        tinh_trang: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ten_khu_vuc: "Khu vực B",
        so_dien_thoai: "0911222333",
        kinh_do: "105.841171",
        vi_do: "21.0245",
        mo_ta: "Trạm số tân tại khu vực B",
        suc_chua: 150,
        dang_chua: 50,
        tinh_trang: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tramsotans", null, {});
  },
};
