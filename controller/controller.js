'use strict';

let response = require('../res');
let connection = require('../config/connection');

exports.index = (req, res) => {
  response.ok('Welcome to Free API Access!', res);
};

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
