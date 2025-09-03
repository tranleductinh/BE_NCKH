const nhanviens = require("../models/nhanviens");

class nhanviensController {
  async themMoi(req, res) {
    try {
      const {
        id_tram_so_tan,
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
      const hashed = await bcrypt.hash(mat_khau, salt);
      const data = await nhanviens.add(
        id_tram_so_tan,
        so_dien_thoai,
        hashed,
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
      if (error.constraint === "nhanviens_so_dien_thoai_key") {
        return res.status(402).json({ message: "Số điện thoại đã tồn tại" });
      }
      return res.status(500).json(error.message);
    }
  }
  async capNhat(req, res) {
    try {
      const {
        id,
        id_tram_so_tan,
        so_dien_thoai,
        mat_khau,
        ho_va_ten,
        gioi_tinh,
        dia_chi,
        phuong,
        thanh_pho,
        tinh_trang,
      } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hanshed = await bcrypt.hash(mat_khau, salt);
      const data = await nhanviens.update(
        id,
        id_tram_so_tan,
        so_dien_thoai,
        hanshed,
        ho_va_ten,
        gioi_tinh,
        dia_chi,
        phuong,
        thanh_pho,
        tinh_trang
      );
      return res
        .status(200)
        .json({ message: "Cập nhật thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async capNhatOpen(req, res) {
    try {
      const { mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho } =
        req.body;
      const data = await nhanviens.updateOpen(
        req.user.id,
        mat_khau,
        ho_va_ten,
        gioi_tinh,
        dia_chi,
        phuong,
        thanh_pho
      );
      return res
        .status(200)
        .json({ message: "Cập nhật thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async xoaNhanVien(req, res) {
    try {
      const data = await nhanviens.delete(req.params.id);
      return res
        .status(200)
        .json({ message: "Xóa người dùng thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async doiMatKhau(req, res) {
    try {
      const { mat_khau_cu1, mat_khau_moi1, mat_khau_moi2 } = req.body;

      const nhanvien = await nhanviens.getById(req.user.id);
      const validPassword = await bcrypt.compare(
        mat_khau_cu1,
        nhanvien.mat_khau
      );
      if (!validPassword) {
        return res.status(403).json({ message: "Sai mật khẩu" });
      }
      if (mat_khau_cu1 !== mat_khau_moi1) {
        return res.status(400).json({
          message: "Mật khẩu cũ được không trùng khớp với mật khẩu mới",
        });
      }
      if (mat_khau_moi1 !== mat_khau_moi2) {
        return res.status(400).json({ message: "Mật khẩu mới không khớp" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(mat_khau_moi2, salt);
      await nhanviens.changePassword(req.user.id, hashed);
      return res
        .status(200)
        .json({ message: "Đổi mật khóa thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async getNhanVien(req, res) {
    try {
      const data = await nhanviens.getById(req.user.id);
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async getData(req, res) {
    try {
      const data = await nhanviens.getData();
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new nhanviensController();
