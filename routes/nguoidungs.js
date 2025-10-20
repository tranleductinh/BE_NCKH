const express = require("express");
const router = express.Router();
const nguoidungsController = require("../controllers/nguoidungsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.put("/cap-nhat", authMiddleware.verifyToken, nguoidungsController.capNhat);
router.put("/cap-nhat-open", authMiddleware.verifyToken, nguoidungsController.capNhatOpen);
router.put("/doi-mat-khau", authMiddleware.verifyToken, nguoidungsController.doiMatKhau);
router.delete("/xoa/:id", authMiddleware.verifyToken, nguoidungsController.xoaNguoiDung);
router.get("/lay-nguoi-dung", authMiddleware.verifyToken, nguoidungsController.getNguoiDung);
router.get("/lay-du-lieu", authMiddleware.verifyToken, nguoidungsController.getData);
router.get("/kiem-tra-nguoi-dung", authMiddleware.verifyToken, nguoidungsController.getNguoiDung);
router.post("/gui-yeu-cau", nguoidungsController.guiYeuCau);
module.exports = router;
