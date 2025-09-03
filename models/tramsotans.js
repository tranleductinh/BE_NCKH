const {sequelize} = require('./index')

class tramsotans {

    async add(ten_khu_vuc, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua){
        const data = await sequelize.query(`
          INSERT INTO tramsotans (ten_khu_vuc, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua) 
          VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *
        `,{
            bind: [ten_khu_vuc, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua],
            type: sequelize.QueryTypes.INSERT
        })
        return data[0]
    }

    async update(id,ten_khu_vuc, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua, tinh_trang){
        const data = await sequelize.query(`
            UPDATE tramsotans SET ten_khu_vuc = $1, so_dien_thoai = $2, kinh_do = $3, 
                            vi_do = $4, mo_ta = $5, suc_chua = $6, dang_chua = $7, tinh_trang = $8, "updatedAt" = NOW() 
            WHERE id = $9 RETURNING *
        `,{
            bind: [ten_khu_vuc, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua, tinh_trang, id],
            type: sequelize.QueryTypes.UPDATE
        })
        return data[0]
    }

    async delete(id) {
        const data = await sequelize.query(`
            DELETE FROM tramsotans WHERE id = $1 RETURNING *
        `,{
            bind: [id],
            type: sequelize.QueryTypes.RAW
        })
        return data[0]
    }

    async getData() {
        const data = await sequelize.query(`
            SELECT * FROM tramsotans
        `,{
            type: sequelize.QueryTypes.SELECT
        })
        return data;
    }

    async getDataOpen() {
        const data = await sequelize.query(`
            SELECT * FROM tramsotans WHERE tinh_trang = true
        `,{
            type: sequelize.QueryTypes.SELECT
        })
        return data;
    }

}

module.exports = new tramsotans()