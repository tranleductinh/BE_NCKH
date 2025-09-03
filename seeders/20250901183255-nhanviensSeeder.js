"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashed = await bcrypt.hash("123456", 10);
    await queryInterface.bulkInsert("nhanviens", [
      {
        id_tram_so_tan: 1, // nhớ trong bảng tramsotans phải có id=1 trước
        email: "nguyenvana@example.com",
        so_dien_thoai: "0901234567",
        mat_khau: hashed,
        ho_va_ten: "Nguyễn Văn A",
        gioi_tinh: "Nam",
        dia_chi: "123 Đường ABC",
        phuong: "Phường 1",
        thanh_pho: "TP.HCM",
        tinh_trang: true,
        is_verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_tram_so_tan: 1,
        email: "tranthib@example.com",
        so_dien_thoai: "0912345678",
        mat_khau: hashed,
        ho_va_ten: "Trần Thị B",
        gioi_tinh: "Nữ",
        dia_chi: "456 Đường XYZ",
        phuong: "Phường 2",
        thanh_pho: "Hà Nội",
        tinh_trang: true,
        is_verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("nhanviens", null, {});
  },
};
