'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('cuutros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_yeu_cau_cuu_tro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'yeucaucuutros',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ho_va_ten: {
        type: Sequelize.STRING,
        allowNull: false
      },
      so_dien_thoai: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kinh_do: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vi_do: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('cuutros');
  }
};
