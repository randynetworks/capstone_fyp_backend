var mysql = require('mysql');
require('dotenv').config();

// create connection
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDATA,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.connect((err) => {
  if (err) throw err;
  console.log('mysql is connect');
});

module.exports = conn;
