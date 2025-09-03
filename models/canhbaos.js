const { sequelize } = require("../models/index");

class canhbaos {
  async add(
    id_chi_tiet_iot,
    noi_dung,
    muc_do,
    khu_vuc,
    kinh_do,
    vi_do,
    mau_sac
  ) {
    const data = await sequelize.query(
      `
            INSERT INTO canhbaos (id_chi_tiet_iot, noi_dung, muc_do, khu_vuc, kinh_do, vi_do, mau_sac, tinh_trang) 
            VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *
        `,
      {
        bind: [
          id_chi_tiet_iot,
          noi_dung,
          muc_do,
          khu_vuc,
          kinh_do,
          vi_do,
          mau_sac,
        ],
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return data[0];
  }

  async update(
    id,
    id_chi_tiet_iot,
    noi_dung,
    muc_do,
    khu_vuc,
    kinh_do,
    vi_do,
    mau_sac,
    tinh_trang
  ) {
    const data = await sequelize.query(
      `
            UPDATE canhbaos SET id_chi_tiet_iot = $1, noi_dung = $2, muc_do = $3, khu_vuc = $4, kinh_do = $5, vi_do = $6, mau_sac = $7, tinh_trang = $8, "updatedAt" = NOW() WHERE id = $9 RETURNING *
        `,
      {
        bind: [
          id_chi_tiet_iot,
          noi_dung,
          muc_do,
          khu_vuc,
          kinh_do,
          vi_do,
          mau_sac,
          tinh_trang,
          id,
        ],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }

  async delete(id) {
    await sequelize.query(
      `
            DELETE FROM canhbaos WHERE id = $1
        `,
      {
        bind: [id],
        type: sequelize.QueryTypes.RAW,
      }
    );
  }

  async getData() {
    const data = sequelize.query(
      `
            SELECT * FROM canhbaos
        `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data;
  }

  async getDataOpen(id_chi_tiet_iot) {
    const data = await sequelize.query(
      `
            SELECT * FROM canhbaos WHERE id_chi_tiet_iot = $1 ORDERBY "createdAt" ASC LIMIT 1
        `,
      {
        bind: [id_chi_tiet_iot],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data[0];
  }
}

module.exports = new canhbaos();
