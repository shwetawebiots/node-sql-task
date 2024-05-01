const jwt = require('jsonwebtoken');
const config = require('../config/config');
const RolePermission = require('../models/rolePermission');

module.exports = function checkPermission(permission) {
  return async (req, res, next) => {
    try {
      if(!req.headers.authorization) {
        res.status(500).json({ error: 'Token Required' });
      }
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, config.jwtSecret);

      const permissions = await RolePermission.findPermissionsByRoleId(decoded.roleId);

      if (permissions.some(p => p.permission_id === permission)) {
        next();
      } else {
        res.status(403).json({ error: 'Insufficient permissions' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};