const mysqlConnection = require('../models/db');

class RolePermission {
  async findPermissionsByRoleId(roleId) {
    const [rows] = await mysqlConnection.execute('SELECT * FROM role_permissions WHERE role_id = ?', [roleId]);
    return rows;
  }
}

module.exports = new RolePermission();