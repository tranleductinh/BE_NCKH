const { sequelize } = require("./index");

class admins {
  async getById(id) {
    const data = await sequelize.query(
      "SELECT * FROM admins WHERE id = $1",
      {
        bind: [id],
        type: sequelize.QueryTypes.SELECT,
      }
    );
  }
}

module.exports = new admins();
