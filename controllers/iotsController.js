const iots = require('../models/iots')

class iotsController {

    async themMoi(req, res) {
        try {
            const {id_chi_tiet_iot, nhiet_do, do_am, luong_mua} = req.body
            const count = await iots.demDong(id_chi_tiet_iot)
            if(count > 50) {
                const result = count - 50;
                await iots.deleteDuLieu(id_chi_tiet_iot, result)
            }
            const data = await iots.add(id_chi_tiet_iot, nhiet_do, do_am, luong_mua)
            return res.status(200).json({message: "Thêm thành công", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    async layDuLieu(req, res) {
        try {
            const data = await iots.getData(req.body.id_chi_tiet_iot)
            return res.status(200).json({message: "Lấy dữ liệu", data: data})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}

module.exports = new iotsController()