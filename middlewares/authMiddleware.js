const jwt = require("jsonwebtoken");
require("dotenv").config();

class authMiddleware {
  async verifyToken(req, res, next) {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (error, user) => {
        if (error) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json({ message: "Không có token" });
    }
  }
}

module.exports = new authMiddleware();
