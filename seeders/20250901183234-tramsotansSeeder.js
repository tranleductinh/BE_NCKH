"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("tramsotans", [
            {
                ten_khu_vuc: "Thọ Quang 1",
                so_dien_thoai: "0236 123 4567",
                kinh_do: "108.247020",
                vi_do: "16.101275",
                mo_ta: "Trạm sơ tán gần âu thuyền Thọ Quang, thuận tiện cho dân cư xung quanh",
                suc_chua: 100,
                dang_chua: 20,
                tinh_trang: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                ten_khu_vuc: "Thọ Quang 2",
                so_dien_thoai: "0236 765 4321",
                kinh_do: "108.248500",
                vi_do: "16.102500",
                mo_ta: "Trạm sơ tán gần bãi biển Thọ Quang",
                suc_chua: 120,
                dang_chua: 30,
                tinh_trang: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                ten_khu_vuc: "Thọ Quang 3",
                so_dien_thoai: "0236 987 6543",
                kinh_do: "108.249800",
                vi_do: "16.103800",
                mo_ta: "Trạm sơ tán khu dân cư Thọ Quang phía Nam",
                suc_chua: 150,
                dang_chua: 50,
                tinh_trang: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                ten_khu_vuc: "Thọ Quang 4",
                so_dien_thoai: "0236 112 2334",
                kinh_do: "108.250900",
                vi_do: "16.105000",
                mo_ta: "Trạm sơ tán khu dân cư Thọ Quang phía Bắc",
                suc_chua: 200,
                dang_chua: 70,
                tinh_trang: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                ten_khu_vuc: "Thọ Quang 5",
                so_dien_thoai: "0236 223 3445",
                kinh_do: "108.252000",
                vi_do: "16.106200",
                mo_ta: "Trạm sơ tán gần trung tâm Thọ Quang",
                suc_chua: 180,
                dang_chua: 60,
                tinh_trang: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("tramsotans", null, {});
    },
};
