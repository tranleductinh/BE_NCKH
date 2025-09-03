const thongbaos = require('../models/thongbaos')

class thongbaosController {

    async themMoi(req, res) {
        try {
            const {tieu_de, noi_dung} = req.body
            const data = await thongbaos.add(req.user.id, tieu_de, noi_dung)
            return res.status(200).json({message: 'Thêm mới thành công', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async capNhat(req, res) {
        try {
            const {id, tieu_de, noi_dung, tinh_trang} = req.body
            const data = await thongbaos.update(id, req.user.id, tieu_de, noi_dung, tinh_trang)
            return res.status(200).json({message: 'Cập nhật thành công', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async xoa(req, res) {
        try {
            const data = await thongbaos.delete(req.params.id)
            return res.status(200).json({message: 'Xóa thành công', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async layThongBao(req, res) {
        try {
            const data = await thongbaos.getData()
            return res.status(200).json({message: 'Lấy thành công', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    } 
    
    async layThongBaoOpen(req, res) {
        try {
            const data = await thongbaos.getDataOpen()
            return res.status(200).json({message: 'Lấy thành công', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async layThongBaoOpenNhanVien(req, res) {
        try {
            const data = await thongbaos.getDataOpenNhanVien(req.user.id)
            return res.status(200).json({message: 'Lấy thông báo', data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

}

module.exports = new thongbaosController()