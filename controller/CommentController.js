let response = require('../res');
let connection = require('../config/connection');

// Menampilkan 1 Comment
exports.getComment = (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM comments WHERE id = ?`,
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

// Tambah Comment
exports.storeComment = (req, res) => {
  let username = req.body.username;
  let comment = req.body.comment;
  let platform_id = req.body.platform_id;

  connection.query(
    'INSERT INTO comments (username, comment, platform_id) VALUES (?,?,?)',
    [username, comment, platform_id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success added Data!', res);
      }
    }
  );
};

//  Update Comment
exports.updateComment = (req, res) => {
  let id = req.body.id;
  let username = req.body.username;
  let comment = req.body.comment;
  let platform_id = req.body.platform_id;

  connection.query(
    'UPDATE comments SET username=?, comment=?, platform_id=? WHERE id=?',
    [username, comment, platform_id, id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success Updated Data!', res);
      }
    }
  );
};

exports.destroyComment = (req, res) => {
  let id = req.body.id;

  connection.query(
    'DELETE FROM comments WHERE id=?',
    [id],
    (err, row, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success Deleted Data!', res);
      }
    }
  );
};
