const canhbaos = require("../models/canhbaos");
const iot = require("../models/iots");
const canhbao = {
  "Không Mưa": {
    mau_sac: "#ADD8E6",
    noi_dung: "Thời tiết khô ráo, không có mưa.",
  },
  "Mưa Nhỏ": {
    mau_sac: "#90EE90",
    noi_dung:
      "Lượng mưa ít, mưa nhẹ, không ảnh hưởng nhiều đến hoạt động ngoài trời.",
  },
  "Mưa Vừa": {
    mau_sac: "#FFD700",
    noi_dung:
      "Lượng mưa trung bình, cần dùng ô hoặc áo mưa, có thể gây chút bất tiện.",
  },
  "Mưa To": {
    mau_sac: "#FFA500",
    noi_dung:
      "Mưa lớn, ảnh hưởng đến tầm nhìn và giao thông, cần cẩn thận khi di chuyển.",
  },
  "Mưa Rất To": {
    mau_sac: "#FF4500",
    noi_dung:
      "Mưa cực lớn, có nguy cơ ngập lụt hoặc ảnh hưởng nghiêm trọng đến sinh hoạt.",
  },
};
class canbaosController {
  async themMoi(req, res) {
    try {
      const { id_chi_tiet_iot, khu_vuc, kinh_do, vi_do } = req.body;
      let { muc_do, mau_sac, noi_dung } = null;
      const data_iot = await iot.getData(id_chi_tiet_iot);
      if (data_iot[0].luong_mua == 0) {
        muc_do = "Không mưa";
        mau_sac = canhbao["Không Mưa"].mau_sac;
        noi_dung = canhbao["Không Mưa"].noi_dung;
      } else if (data_iot[0].luong_mua < 25) {
        muc_do = "Mưa Nhỏ";
        mau_sac = canhbao["Mưa Nhỏ"].mau_sac;
        noi_dung = canhbao["Mưa Nhỏ"].noi_dung;
      } else if (data_iot[0].luong_mua < 50) {
        muc_do = "Mưa Vừa";
        mau_sac = canhbao["Mưa Vừa"].mau_sac;
        noi_dung = canhbao["Mừa Vừa"].noi_dung;
      } else if (data_iot[0].luong_mua < 100) {
        muc_do = "Mưa To";
        mau_sac = canhbao["Mưa To"].mau_sac;
        noi_dung = canhbao["Mưa To"].noi_dung;
      } else {
        muc_do = "Mưa Rất To";
        mau_sac = canhbao["Mưa Rất To"].mau_sac;
        noi_dung = canhbao["Mưa Rất To"].noi_dung;
      }
      const data = await canhbaos.add(
        id_chi_tiet_iot,
        noi_dung,
        muc_do,
        khu_vuc,
        kinh_do,
        vi_do,
        mau_sac
      );
      return res
        .status(200)
        .json({ message: "Thêm mới thành công", data: data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getData(req, res) {
    try {
      const data = await canhbaos.getData();
      return res.status(200).json({ message: "Lấy dữ liệu thành công", data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getDataOpen (req, res) {
    try {
      const data = await canhbaos.getDataOpen();
      return res.status(200).json({ message: "Lấy dữ liệu", data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new canbaosController();
