'use strict';

exports.ok = function (val, res) {
  let data = {
    status: 200,
    value: val,
  };
  res.json(data);
  res.end();
};
