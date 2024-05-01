const mysqlConnection = require('../models/db');

class Role {
  async findById(id) {
    const [rows] = await mysqlConnection.execute('SELECT * FROM roles WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = new Role();