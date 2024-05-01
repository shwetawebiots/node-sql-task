const mysqlConnection = require('../models/db');

class Product {
  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('SELECT * FROM products', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  create(productData) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('INSERT INTO products SET ?', productData, (err, results) => {
        if (err) reject(err);
        resolve(results.insertId);
      });
    });
  }

  update(id, productData) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('UPDATE products SET ? WHERE id = ?', [productData, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = new Product();
