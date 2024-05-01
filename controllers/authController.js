const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const mysqlConnection = require('../models/db');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    mysqlConnection.query("SELECT * FROM users WHERE email = ?", [email], (err, response) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      if (!response || !response.length) {
        throw new Error('User not found');
      }
      const user = response[0];
      if (user && bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id, roleId: user.role_id }, config.jwtSecret);
        return res.json({ token });
      } else {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};