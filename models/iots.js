const { sequelize } = require("../models/index");

class iots {
  async demDong(id_chi_tiet_iot) {
    const data = await sequelize.query(
      `
            SELECT COUNT(*) AS tong FROM iots WHERE id_chi_tiet_iot = $1
        `,
      {
        bind: [id_chi_tiet_iot],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return parseInt(data[0].tong, 10);
  }

  async deleteDuLieu(id_chi_tiet_iot, result) {
    await sequelize.query(
      `
            WITH to_delete AS (
                SELECT id FROM iots
                WHERE id_chi_tiet_iot = $1
                ORDER BY "createdAt" ASC
                LIMIT $2
            )
            DELETE FROM iots WHERE id IN (SELECT id FROM to_delete)
        `,
      {
        bind: [id_chi_tiet_iot, result],
        type: sequelize.QueryTypes.RAW,
      }
    );
  }

  async add(id_chi_tiet_iot, nhiet_do, do_am, luong_mua) {
    const data = await sequelize.query(
      `
            INSERT INTO iots (id_chi_tiet_iot, nhiet_do, do_am, luong_mua) VALUES ($1, $2, $3, $4) RETURNING *
        `,
      {
        bind: [id_chi_tiet_iot, nhiet_do, do_am, luong_mua],
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return data[0];
  }

  async getData(id_chi_tiet_iot) {
    const data = await sequelize.query(
      `
            SELECT * FROM iots WHERE id_chi_tiet_iot = $1
            ORDER by "createdAt" DESC LIMIT 1
        `,
      {
        bind: [id_chi_tiet_iot],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return data[0];
  }
}

module.exports = new iots();
