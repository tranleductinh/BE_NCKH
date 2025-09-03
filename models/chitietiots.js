const { sequelize } = require("./index");

class chitietiot {
  async add(id_nhan_vien, dia_chi, phuong, thanh_pho, kinh_do, vi_do) {
    const data = await sequelize.query(
      `
            INSERT INTO chitietiots (id_nhan_vien, dia_chi, phuong, thanh_pho, kinh_do, vi_do) 
            VALUES ($1,$2,$3,$4,$5,$6) RETURNING *
        `,
      {
        bind: [id_nhan_vien, dia_chi, phuong, thanh_pho, kinh_do, vi_do],
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return data[0];
  }
  async update(
    id,
    id_nhan_vien,
    dia_chi,
    phuong,
    thanh_pho,
    kinh_do,
    vi_do,
    tinh_trang
  ) {
    const data = await sequelize.query(
      `
            UPDATE chitietiots SET id_nhan_vien = $1, dia_chi = $2, phuong = $3, thanh_pho = $4, kinh_do = $5, vi_do = $6, tinh_trang = $7, "updatedAt" = NOW() WHERE id = $8 RETURNING *
        `,
      {
        bind: [
          id_nhan_vien,
          dia_chi,
          phuong,
          thanh_pho,
          kinh_do,
          vi_do,
          tinh_trang,
          id,
        ],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }
  async delete(id) {
    const data = await sequelize.query(
      `
            DELETE FROM chitietiots WHERE id = $1 RETURNING *
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
        SELECT * FROM chitietiots
    `,
      { type: sequelize.QueryTypes.SELECT }
    );
    return data;
  }
  async getDataOpen(id_nhan_vien) {
    const data = await sequelize.query(
      `
        SELECT * FROM chitietiots WHERE id_nhan_vien = $1
    `,
      { bind: [id_nhan_vien], type: sequelize.QueryTypes.SELECT }
    );
    return data;
  }
}

module.exports = new chitietiot();
