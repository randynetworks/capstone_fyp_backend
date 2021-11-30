let response = require('../res');
var path = require('path');

exports.index = (req, res) => {
  res.sendFile(path.resolve('index.html'));
};
