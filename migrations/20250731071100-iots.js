'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('iots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_chi_tiet_iot: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'chitietiots',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nhiet_do: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      do_am: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      luong_mua: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('iots');
  }
};
