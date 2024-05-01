const mysql = require("mysql2");
const dbConfig = require("../config/db");

var connection =  mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Check MySQL connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');


//   // connection.query("SELECT * FROM users", (err, res) => {

//   //   console.log("tutorials: ", res);

//   // });


//   // // Retrieve all tables from the database
//   connection.execute('SELECT * FROM users', (err, results) => {
//     console.log(results)
//     // if (err) {
//     //   console.error('Error retrieving tables:', err);
//     //   connection.release();
//     //   return;
//     // }
//     // console.log('Tables in the database:');
//     // results.forEach((row) => {
//     //   console.log(row[`Tables_in_${dbConfig.DB}`]);
//     // });
//     // connection.release();
//   });
// });

module.exports = connection;
