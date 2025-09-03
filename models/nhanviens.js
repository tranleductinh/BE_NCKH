const { sequelize } = require("./index");

class nhanviens {
  async add(
    id_tram_so_tan,
    so_dien_thoai,
    hashed,
    ho_va_ten,
    gioi_tinh,
    dia_chi,
    phuong,
    thanh_pho
  ) {
    const data = await sequelize.query(
      `INSERT INTO nhanviens (id_tram_so_tan, so_dien_thoai, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho) 
          VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      {
        bind: [
          id_tram_so_tan,
          so_dien_thoai,
          hashed,
          ho_va_ten,
          gioi_tinh,
          dia_chi,
          phuong,
          thanh_pho,
        ],
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return data[0];
  }

  async update(
    id,
    id_tram_so_tan,
    so_dien_thoai,
    mat_khau,
    ho_va_ten,
    gioi_tinh,
    dia_chi,
    phuong,
    thanh_pho,
    tinh_trang
  ) {
    const data = await sequelize.query(
      `UPDATE nhanviens SET id_tram_so_tan = $1, so_dien_thoai = $2, mat_khau = $3, ho_va_ten = $4, gioi_tinh = $5, dia_chi = $6, phuong = $7, thanh_pho = $8, tinh_trang = $9, "updatedAt" = NOW() WHERE id = $10 RETURNING *`,
      {
        bind: [
          id_tram_so_tan,
          so_dien_thoai,
          mat_khau,
          ho_va_ten,
          gioi_tinh,
          dia_chi,
          phuong,
          thanh_pho,
          tinh_trang,
          id,
        ],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }

  async updateOpen(
    id,
    mat_khau,
    ho_va_ten,
    gioi_tinh,
    dia_chi,
    phuong,
    thanh_pho
  ) {
    const data = await sequelize.query(
      `UPDATE nhanviens SET mat_khau = $1, ho_va_ten = $2, gioi_tinh = $3, dia_chi = $4, phuong = $5, thanh_pho = $6, "updatedAt" = NOW() WHERE id = $7 RETURNING *`,
      {
        bind: [mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho, id],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }

  async delete(id) {
    const data = await sequelize.query(
      `DELETE FROM nhanviens WHERE id = $1 RETURNING *`,
      {
        bind: [id],
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data[0];
  }

  async getData() {
    const data = await sequelize.query(`SELECT * FROM nhanviens`, {
      type: sequelize.QueryTypes.SELECT,
    });
    return data;
  }
  async getById(id) {
    const data = await sequelize.query(
      `SELECT * FROM nhanviens WHERE id = $1`,
      { bind: [id], type: sequelize.QueryTypes.SELECT }
    );
    return data[0];
  }

  async getSoDienThoai(so_dien_thoai) {
    const data = await sequelize.query(
      `SELECT * FROM nhanviens WHERE so_dien_thoai = $1`,
      { bind: [so_dien_thoai], type: sequelize.QueryTypes.SELECT }
    );
    return data[0];
  }
  async changePassword(id, hashed) {
    await sequelize.query(
      `UPDATE nhanviens SET mat_khau = $1, "updatedAt" = NOW() WHERE id = $2`,
      { bind: [hashed, id], type: sequelize.QueryTypes.UPDATE }
    );
  }
}
module.exports = new nhanviens();
