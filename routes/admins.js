const express = require("express");
const router = express.Router();
const adminsController = require("../controllers/adminsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get(
  "/kiem-tra-admin",
  authMiddleware.verifyToken,
  adminsController.kiemTraAdmin
);

module.exports = router;
