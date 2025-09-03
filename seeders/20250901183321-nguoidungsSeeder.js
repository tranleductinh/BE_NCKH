"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash("123456", 10);

    await queryInterface.bulkInsert("nguoidungs", [
      {
        so_dien_thoai: "0901111222",
        mat_khau: passwordHash,
        ho_va_ten: "Nguyễn Văn C",
        gioi_tinh: "Nam",
        dia_chi: "12 Nguyễn Trãi",
        phuong: "Phường 5",
        thanh_pho: "TP.HCM",
        tinh_trang: true,
        is_verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        so_dien_thoai: "0913333444",
        mat_khau: passwordHash,
        ho_va_ten: "Trần Thị D",
        gioi_tinh: "Nữ",
        dia_chi: "45 Lý Thường Kiệt",
        phuong: "Phường 7",
        thanh_pho: "Hà Nội",
        tinh_trang: true,
        is_verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("nguoidungs", null, {});
  },
};
