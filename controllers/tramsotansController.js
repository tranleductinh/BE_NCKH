const tramsotans = require('../models/tramsotans')

class tramsotansController {

    async themMoi(req, res) {
        try {
            const {so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua} = req.body
            const data = await tramsotans.add(req.user.id, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua)
            return res.status(200).json({message: "Thêm mới thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async capNhat(req, res) {
        try {
            const {id, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua, tinh_trang} = req.body
            const data = await tramsotans.update(id,req.user.id, so_dien_thoai, kinh_do, vi_do, mo_ta, suc_chua, dang_chua, tinh_trang)
            return res.status(200).json({message: "Cập nhật thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async xoa(req, res) {
        try {
            const data = await tramsotans.delete(req.params.id)
            return res.status(200).json({message: "Xóa thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async layTram(req, res) {
        try {
            const data = await tramsotans.getData()
            return res.status(200).json({message: "lấy dữ liệu thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async layTramOpen(req, res) {
        try {
            const data = await tramsotans.getDataOpen()
            return res.status(200).json({message: "lấy dữ liệu thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

}

module.exports = new tramsotansController()