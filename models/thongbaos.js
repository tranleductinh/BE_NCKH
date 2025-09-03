const { sequelize } = require("./index");

class thongbaos {
  async add(id_nhan_vien, tieu_de, noi_dung) {
    const data = await sequelize.query(
      `
            INSERT INTO thongbaos (id_nhan_vien, tieu_de, noi_dung) VALUES
            ($1, $2, $3) RETURNING *
        `,
      {
        bind: [id_nhan_vien, tieu_de, noi_dung],
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return data[0];
  }

  async update(id, id_nhan_vien, tieu_de, noi_dung, tinh_trang) {
    const data = await sequelize.query(
      `
            UPDATE thongbaos SET id_nhan_vien = $1, tieu_de = $2, noi_dung = $3, tinh_trang = $4, "updatedAt" = NOW() 
            WHERE id = $5 RETURNING *
        `,
      {
        bind: [id_nhan_vien, tieu_de, noi_dung, tinh_trang, id],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }

  async delete(id) {
    const data = await sequelize.query(
      `
            DELETE FROM thongbaos WHERE id = $1 RETURNING *
        `,
      {
        bind: [id],
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data[0];
  }

  async getData() {
    const data = await sequelize.query(
      `
            SELECT * FROM thongbaos
        `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data[0];
  }

  async getDataOpen() {
    const data = await sequelize.query(
      `
            SELECT * FROM thongbaos WHERE tinh_trang = true
        `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data[0];
  }
  async getDataOpenNhanVien(id_nhan_vien) {
    const data = await sequelize.query(
      `
            SELECT * FROM thongbaos WHERE id_nhan_vien = $1
        `,
      {
        bind: [id_nhan_vien],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data[0];
  }
}

module.exports = new thongbaos();
