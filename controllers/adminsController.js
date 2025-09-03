const admins = require("../models/admins");

class adminsController {
  async kiemTraAdmin(req, res) {
    try {
      const data = await admins.getById(req.user.id);
      return res.status(200).json({ status: true, data: data });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi: " + error.message });
    }
  }
}

module.exports = new adminsController();
