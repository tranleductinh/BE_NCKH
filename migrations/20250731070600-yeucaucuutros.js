"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("yeucaucuutros", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ho_va_ten: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            so_dien_thoai: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            dia_chi_cu_the: {
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
            noi_dung: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            vi_do: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            kinh_do: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            hinh_anh: {
                type: Sequelize.STRING,
                allowNull: true, // sẽ chứa URL Cloudinary
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
        await queryInterface.dropTable("yeucaucuutros");
    },
};
