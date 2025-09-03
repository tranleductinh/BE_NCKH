const express = require("express");
const router = express.Router();
const nhanviensController = require("../controllers/nhanviensController");
const authMiddleware = require("../middlewares/authMiddleware");
router.post(
    "/them-moi",
    authMiddleware.verifyToken,
    nhanviensController.themMoi
);
router.put(
  "/cap-nhat",
  authMiddleware.verifyToken,
  nhanviensController.capNhat
);
router.put(
  "/cap-nhat-open",
  authMiddleware.verifyToken,
  nhanviensController.capNhatOpen
);
router.put(
  "/doi-mat-khau",
  authMiddleware.verifyToken,
  nhanviensController.doiMatKhau
);
router.delete(
  "/xoa/:id",
  authMiddleware.verifyToken,
  nhanviensController.xoaNhanVien
);
router.get(
  "/lay-nhan-vien",
  authMiddleware.verifyToken,
  nhanviensController.getNhanVien
);
router.get(
  "/lay-du-lieu",
  authMiddleware.verifyToken,
  nhanviensController.getData
);
router.get(
  "/kiem-tra-nhan-vien",
  authMiddleware.verifyToken,
  nhanviensController.getNhanVien
);

module.exports = router;
