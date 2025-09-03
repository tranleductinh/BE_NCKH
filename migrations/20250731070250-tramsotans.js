"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tramsotans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ten_khu_vuc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      so_dien_thoai: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kinh_do: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vi_do: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mo_ta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      suc_chua: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dang_chua: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tinh_trang: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable("tramsotans");
  },
};
