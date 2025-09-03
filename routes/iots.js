var express = require('express');
var router = express.Router();
const iotsController = require('../controllers/iotsController')

router.post('/them-moi', iotsController.themMoi);
router.get('/lay-du-lieu', iotsController.layDuLieu);

module.exports = router;
