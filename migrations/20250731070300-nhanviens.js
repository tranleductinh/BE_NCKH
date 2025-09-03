"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("nhanviens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_tram_so_tan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tramsotans",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      so_dien_thoai: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      mat_khau: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ho_va_ten: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gioi_tinh: {
        type: Sequelize.ENUM("Nam", "Nữ", "Khác"),
        allowNull: false,
        defaultValue: "Khác",
      },
      dia_chi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phuong: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thanh_pho: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tinh_trang: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("nhanviens");
  },
};
