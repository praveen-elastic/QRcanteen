const mysql = require('mysql');
require('dotenv/config');

var db;

function connectDatabase() {
  if (!db) {
    db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '7007234358',
      database: 'test',
      port: 3306
    });

    db.connect(function (err) {
      if (!err) {
        console.log('Database is connected!');
      } else {
        console.log(err);
      }
    });
  }
  return db;
}

module.exports = connectDatabase();
