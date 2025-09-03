var express = require('express')
var router = express.Router()
const tramsotansController = require('../controllers/tramsotansController')

router.post('/them-moi',tramsotansController.themMoi)
router.put('/cap-nhat',tramsotansController.capNhat)
router.delete('/xoa/:id',tramsotansController.xoa)
router.get('/lay-tram',tramsotansController.layTram)
router.get('/lay-tram-open',tramsotansController.layTramOpen)

module.exports = router