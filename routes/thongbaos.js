var express = require('express')
var router = express.Router()
const thongbaosController = require('../controllers/thongbaosController')

router.post('/them-moi',thongbaosController.themMoi)
router.put('/cap-nhat',thongbaosController.capNhat)
router.delete('/xoa/:id',thongbaosController.xoa)
router.get('/lay-thong-bao',thongbaosController.layThongBao)
router.get('/lay-thong-bao-open',thongbaosController.layThongBaoOpen)
router.get('/lay-thong-bao-open-nhan-vien',thongbaosController.layThongBaoOpenNhanVien)

module.exports = router