let response = require('../res');
let connection = require('../config/connection');

// Menampilkan List Passion
exports.getAllPassion = (req, res) => {
  connection.query('SELECT * FROM passions', (err, rows, field) => {
    if (err) {
      console.log(err);
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
        console.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// Tambah Passion
exports.storePassion = (req, res) => {
  let name = req.body.name;

  connection.query(
    'INSERT INTO passions (name) VALUES (?)',
    [name],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success added Data!', res);
      }
    }
  );
};

//  Update Passion
exports.updatePassion = (req, res) => {
  let id = req.body.id;
  let name = req.body.name;

  connection.query(
    'UPDATE passions SET name=? WHERE id=?',
    [name, id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success Updated Data!', res);
      }
    }
  );
};

exports.destroyPassion = (req, res) => {
  let id = req.body.id;

  connection.query('DELETE FROM passions WHERE id=?', [id], (err, row, field) => {
    if (err) {
      console.log(err);
    } else {
      response.ok('Success Deleted Data!', res);
    }
  });
};
