'use strict';

module.exports = (app) => {
  let json = require('../controller/controller');

  app.route('/').get(json.index);
  app.route('/api/v1/').get(json.index);
  app.route('/api/v1/passions').get(json.getAllPassion);
};
