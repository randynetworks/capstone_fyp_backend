let response = require('../res');
let connection = require('../config/connection');

// Menampilkan List Passion
exports.getAllPassion = (req, res) => {
  connection.query('SELECT * FROM passions', (err, rows, field) => {
    if (err) {
      connection.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan 1 passion
exports.getPassion = (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM passions WHERE id = ?`,
    [id],
    (err, rows, field) => {
      if (err) {
        connection.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};