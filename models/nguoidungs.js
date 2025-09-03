const {sequelize} = require('./index')

class nguoidungs {
  async add(so_dien_thoai, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho) {
    const data = await sequelize.query(
      `INSERT INTO nguoidungs (so_dien_thoai, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho) 
          VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      {
        bind: [
          so_dien_thoai,
          mat_khau,
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

  async update(id, so_dien_thoai, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho, tinh_trang) {
    const data = await sequelize.query(
      `UPDATE nguoidungs SET so_dien_thoai = $1, mat_khau = $2, ho_va_ten = $3, gioi_tinh = $4, dia_chi = $5, phuong = $6, thanh_pho = $7, tinh_trang = $8, "updatedAt" = NOW() WHERE id = $9 RETURNING *`,
      {
        bind: [
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

  async updateOpen(id, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho) {
    const data = await sequelize.query(
      `UPDATE nguoidungs SET mat_khau = $1, ho_va_ten = $2, gioi_tinh = $3, dia_chi = $4, phuong = $5, thanh_pho = $6, "updatedAt" = NOW() WHERE id = $7 RETURNING *`,
      {
        bind: [
          mat_khau,
          ho_va_ten,
          gioi_tinh,
          dia_chi,
          phuong,
          thanh_pho,
          id,
        ],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
    return data[0];
  }

  async delete(id) {
    const data = await sequelize.query(
      `DELETE FROM nguoidungs WHERE id = $1 RETURNING *`,
      {
        bind: [id],
        type: sequelize.QueryTypes.RAW,
      }
    );
    return data[0];
  }

  async getData() {
    const data = await sequelize.query(
      `SELECT * FROM nguoidungs`,
      { type: sequelize.QueryTypes.SELECT }
    );
    return data;
  }
  async getById(id) {
    const data = await sequelize.query(
      `SELECT * FROM nguoidungs WHERE id = $1`,
      { bind: [id], type: sequelize.QueryTypes.SELECT }
    );
    return data[0];
  }

  async getSoDienThoai(so_dien_thoai) {
    const data = await sequelize.query(
      `SELECT * FROM nguoidungs WHERE so_dien_thoai = $1`,
      { bind: [so_dien_thoai], type: sequelize.QueryTypes.SELECT }
    );
    return data[0];
  }
  async changePassword(id, hashed) {
    await sequelize.query(
      `UPDATE nguoidungs SET mat_khau = $1, "updatedAt" = NOW() WHERE id = $2`,
      { bind: [hashed, id], type: sequelize.QueryTypes.UPDATE }
    );
  }
}
 module.exports = new nguoidungs()