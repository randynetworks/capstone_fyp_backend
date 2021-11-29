'use strict';

exports.ok = function (val, res) {
  let data = {
    status: 200,
    information: 'Succesfully',
    data: val,
  };
  res.json(data);
  res.end();
};
