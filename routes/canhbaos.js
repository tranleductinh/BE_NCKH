const express = require('express');
const router = express.Router();
const canhbaosController = require('../controllers/canhbaosController')

router.post('/them-moi',canhbaosController.themMoi)
router.get('/lay-du-lieu',canhbaosController.getData)
router.get('/lay-du-lieu-open',canhbaosController.getDataOpen)

module.exports = router