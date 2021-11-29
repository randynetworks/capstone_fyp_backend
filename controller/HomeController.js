let response = require('../res');

exports.index = (req, res) => {
  response.ok('Welcome to Free API Access!', res);
};
