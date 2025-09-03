var express = require("express");
var router = express.Router();
const chitietiotsController = require("../controllers/chitietiotsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/them-moi", chitietiotsController.themMoi);
router.put("/cap-nhat", chitietiotsController.capNhat);
router.delete("/xoa/:id", chitietiotsController.xoa);
router.get(
  "/lay-chi-tiet-iot",
  authMiddleware.verifyToken,
  chitietiotsController.layChiTietIot
);
router.get(
  "/lay-chi-tiet-iot-open",
  authMiddleware.verifyToken,
  chitietiotsController.layChiTietIotOpen
);

module.exports = router;
