let response = require('../res');
let connection = require('../config/connection');

// Menampilkan List Platform
exports.getAllPlatform = (req, res) => {
  connection.query('SELECT * FROM platforms', (err, rows, field) => {
    if (err) {
      console.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan 1 Platform
exports.getPlatform = (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM platforms WHERE id = ?`,
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

// Menampilkan comment platform
exports.getPlatformComments = (req, res) => {
  let id = req.params.id;
  let datas;
  connection.query(
    `SELECT name, url_image FROM platforms WHERE id = ?`,
    [id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        datas = { platform: rows };
      }
    }
  );
  connection.query(
    `SELECT * FROM comments WHERE platform_id = ?`,
    [id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        let comments = { comments: rows };
        datas = { ...datas, ...comments };

        response.ok(datas, res);
      }
    }
  );
};

// Tambah Platform
exports.storePlatform = (req, res) => {
  let username = req.body.username;
  let name = req.body.name;
  let url = req.body.url;
  let url_image = req.body.url_image;
  let description = req.body.description;
  let passion_id = req.body.passion_id;

  connection.query(
    'INSERT INTO platforms (username, name, url, url_image, description, passion_id) VALUES (?,?,?,?,?,?)',
    [username, name, url, url_image, description, passion_id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success added Data!', res);
      }
    }
  );
};

//  Update Platform
exports.updatePlatform = (req, res) => {
  let id = req.body.id;
  let username = req.body.username;
  let name = req.body.name;
  let url = req.body.url;
  let url_image = req.body.url_image;
  let description = req.body.description;
  let passion_id = req.body.passion_id;

  connection.query(
    'UPDATE platforms SET username=?, name=?, url=?, url_image=?, description=?, passion_id=? WHERE id=?',
    [username, name, url, url_image, description, passion_id, id],
    (err, rows, field) => {
      if (err) {
        console.log(err);
      } else {
        response.ok('Success Updated Data!', res);
      }
    }
  );
};

exports.destroyPlatform = (req, res) => {
  let id = req.body.id;

  connection.query(
    'DELETE FROM platforms WHERE id=?',
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
