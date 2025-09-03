'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('canhbaos', {
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
      noi_dung: {
        type: Sequelize.STRING,
        allowNull: false
      },
      muc_do: {
        type: Sequelize.STRING,
        allowNull: false
      },
      khu_vuc: {
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
      mau_sac: {
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
    await queryInterface.dropTable('canhbaos');
  }
};
