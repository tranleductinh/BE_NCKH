const nguoidungs = require("../models/nguoidungs");
const { sequelize } = require("../models/index");
class nguoidungsController {
    async capNhat(req, res) {
        try {
            const { id, so_dien_thoai, mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho, tinh_trang } =
                req.body;
            const salt = await bcrypt.genSalt(10);
            const hanshed = await bcrypt.hash(mat_khau, salt);
            const data = await nguoidungs.update(
                id,
                so_dien_thoai,
                hanshed,
                ho_va_ten,
                gioi_tinh,
                dia_chi,
                phuong,
                thanh_pho,
                tinh_trang
            );
            return res.status(200).json({ message: "Cập nhật thành công", data: data });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async capNhatOpen(req, res) {
        try {
            const { mat_khau, ho_va_ten, gioi_tinh, dia_chi, phuong, thanh_pho } = req.body;
            const data = await nguoidungs.updateOpen(
                req.user.id,
                mat_khau,
                ho_va_ten,
                gioi_tinh,
                dia_chi,
                phuong,
                thanh_pho
            );
            return res.status(200).json({ message: "Cập nhật thành công", data: data });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async xoaNguoiDung(req, res) {
        try {
            const data = await nguoidungs.delete(req.params.id);
            return res.status(200).json({ message: "Xóa người dùng thành công", data: data });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async doiMatKhau(req, res) {
        try {
            const { mat_khau_cu1, mat_khau_moi1, mat_khau_moi2 } = req.body;

            const nguoidung = await nguoidungs.getById(req.user.id);
            const validPassword = await bcrypt.compare(mat_khau_cu1, nguoidung.mat_khau);
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
            await nguoidungs.changePassword(req.user.id, hashed);
            return res.status(200).json({ message: "Đổi mật khóa thành công", data: data });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async getNguoiDung(req, res) {
        try {
            const data = await nguoidungs.getById(req.user.id);
            return res.status(200).json({ data: data });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async getData(req, res) {
        try {
            const data = await nguoidungs.getData();
            return res.status(200).json({ data: data });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    async guiYeuCau(req, res) {
        try {
            const { ho_va_ten, so_dien_thoai, dia_chi_cu_the, phuong, thanh_pho, noi_dung, vi_do, kinh_do, hinh_anh } =
                req.body;

            // 🔹 Kiểm tra thông tin bắt buộc
            if (!ho_va_ten || !so_dien_thoai || !dia_chi_cu_the || !noi_dung) {
                return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
            }

            // 🔹 Thực hiện truy vấn INSERT
            const data = await sequelize.query(
                `
      INSERT INTO yeucaucuutros 
      (ho_va_ten, so_dien_thoai, dia_chi_cu_the, phuong, thanh_pho, noi_dung, vi_do, kinh_do, hinh_anh, tinh_trang, "createdAt", "updatedAt")
      VALUES (:ho_va_ten, :so_dien_thoai, :dia_chi_cu_the, :phuong, :thanh_pho, :noi_dung, :vi_do, :kinh_do, :hinh_anh, false, NOW(), NOW())
      RETURNING *;
      `,
                {
                    replacements: {
                        ho_va_ten,
                        so_dien_thoai,
                        dia_chi_cu_the,
                        phuong: phuong || "",
                        thanh_pho: thanh_pho || "",
                        noi_dung,
                        vi_do: vi_do || null,
                        kinh_do: kinh_do || null,
                        hinh_anh: hinh_anh || null,
                    },
                    type: sequelize.QueryTypes.SELECT, // ✅ phải dùng SELECT để lấy dữ liệu RETURNING *
                }
            );

            // 🔹 Trả kết quả về FE
            return res.status(200).json({
                success: true,
                message: "Gửi yêu cầu thành công",
                data: data?.[0] || {},
            });
        } catch (error) {
            console.error("❌ Lỗi khi gửi yêu cầu cứu trợ:", error);
            return res.status(500).json({
                success: false,
                message: "Lỗi server",
                error: error.message,
            });
        }
    }
}

module.exports = new nguoidungsController();
