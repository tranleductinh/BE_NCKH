const nguoidungs = require("../models/nguoidungs");
const nhanviens = require("../models/nhanviens");
const admins = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class authController {
  generateAccessToken(user) {
    return jwt.sign(
      {
        id: user.id,
        so_dien_thoai: user.so_dien_thoai,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1d" }
    );
  }
  async dangKy(req, res) {
    try {
      const {
        so_dien_thoai,
        mat_khau,
        ho_va_ten,
        gioi_tinh,
        dia_chi,
        phuong,
        thanh_pho,
      } = req.body;
      if (!/^\d{10,11}$/.test(so_dien_thoai)) {
        return res.status(400).json({
          message: "Số điện thoại phải là số và có 10 hoặc 11 chữ số",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const mat_khau_hash = await bcrypt.hash(mat_khau, salt);
      const data = await nguoidungs.add(
        so_dien_thoai,
        mat_khau_hash,
        ho_va_ten,
        gioi_tinh,
        dia_chi,
        phuong,
        thanh_pho
      );
      return res
        .status(200)
        .json({ message: "Đăng ký thành công", data: data });
    } catch (error) {
      if (error.constraint === "nguoidungs_so_dien_thoai_key") {
        return res.status(400).json({ message: "Số điện thoại đã tồn tại" });
      }
      return res.status(500).json({ message: error.message });
    }
  }
  async dangNhap(req, res) {
    try {
      const { so_dien_thoai, mat_khau } = req.body;
      const nguoidung = await nguoidungs.getSoDienThoai(so_dien_thoai);
      if (!nguoidung) {
        return res.status(401).json({ message: "Số điện thoại không tồn tại" });
      }
      const validPassword = await bcrypt.compare(mat_khau, nguoidung.mat_khau);
      if (!validPassword) {
        return res.status(403).json({ message: "Mật khóa không chính xác" });
      }
      if (nguoidung && validPassword) {
        const accessToken = this.generateAccessToken(nguoidung);
        const { mat_khau, ...others } = nguoidung;
        return res.status(200).json({
          message: "Đăng nhập thành công",
          users: others,
          accessToken,
        });
      }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  }
  async dangNhapNhanvien(req, res) {
    try {
      const { so_dien_thoai, mat_khau } = req.body;
      const nhanvien = await nhanviens.getSoDienThoai(so_dien_thoai);
      if (!nhanvien) {
        return res.status(401).json({ message: "Số điện thoại không tồn tại" });
      }
      const validPassword = await bcrypt.compare(mat_khau, nhanvien.mat_khau);
      if (!validPassword) {
        return res.status(403).json({ message: "Mật khóa không chính xác" });
      }
      if (nhanvien && validPassword) {
        const accessToken = this.generateAccessToken(nhanvien);
        const { mat_khau, ...others } = nhanvien;
        return res.status(200).json({
          message: "Đăng nhập thành công",
          users: others,
          accessToken,
        });
      }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  }
  async dangNhapAdmin(req, res) {
    try {
      const { ten_dang_nhap, mat_khau } = req.body;
      const admin = await admins.getSoDienThoai(ten_dang_nhap);
      if (!admin) {
        return res.status(401).json({ message: "Số điện thoại không tồn tại" });
      }
      const validPassword = await bcrypt.compare(mat_khau, admin.mat_khau);
      if (!validPassword) {
        return res.status(403).json({ message: "Mật khóa không chính xác" });
      }
      if (admin && validPassword) {
        const accessToken = this.generateAccessToken(admin);
        const { mat_khau, ...others } = admin;
        return res.status(200).json({
          message: "Đăng nhập thành công",
          users: others,
          accessToken,
        });
      }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  }
  async dangXuat(req, res) {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return res.status(200).json({ message: "Đăng xuất thành công" });
  }
}

module.exports = new authController();
