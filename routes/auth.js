const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/dang-ky", authController.dangKy);
router.post("/dang-nhap", authController.dangNhap.bind(authController));
router.post(
  "/dang-nhap-nhan-vien",
  authController.dangNhapNhanvien.bind(authController)
);
router.post(
  "/dang-nhap-admin",
  authController.dangNhapAdmin.bind(authController)
);
router.post("/dang-xuat", authController.dangXuat.bind(authController));

module.exports = router;
