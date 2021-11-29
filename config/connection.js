var mysql = require('mysql');

// create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend_fyp',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('mysql is connect');
});

module.exports = conn;
