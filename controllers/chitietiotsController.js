const chitietiot = require("../models/chitietiots");
class chitietiotsController {
  async themMoi(req, res) {
    try {
      const { id_nhan_vien, dia_chi, phuong, thanh_pho, kinh_do, vi_do } =
        req.body;
      const data = await chitietiot.add(
        id_nhan_vien,
        dia_chi,
        phuong,
        thanh_pho,
        kinh_do,
        vi_do
      );
      return res
        .status(200)
        .json({ message: "Thêm mới thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async capNhat(req, res) {
    try {
      const {
        id,
        id_nhan_vien,
        dia_chi,
        phuong,
        thanh_pho,
        kinh_do,
        vi_do,
        tinh_trang,
      } = req.body;
      const data = await chitietiot.update(
        id,
        id_nhan_vien,
        dia_chi,
        phuong,
        thanh_pho,
        kinh_do,
        vi_do,
        tinh_trang
      );
      return res
        .status(200)
        .json({ message: "Cập nhật thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async xoa(req, res) {
    try {
      const data = await chitietiot.delete(req.params.id);
      return res.status(200).json({ message: "Xóa thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async layChiTietIot(req, res) {
    try {
      const data = await chitietiot.getData();
      return res.status(200).json({ message: "Lấy dữ liệu thông", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async layChiTietIotOpen(req, res) {
    try {
      const data = await chitietiot.getDataOpen(req.user.id);
      return res.status(200).json({ message: "Lấy dữ liệu thông", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new chitietiotsController();
