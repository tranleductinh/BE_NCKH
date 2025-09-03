'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('chitietiots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_nhan_vien: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'nhanviens',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dia_chi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phuong: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thanh_pho: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kinh_do: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vi_do: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tinh_trang: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('chitietiots');
  }
};
