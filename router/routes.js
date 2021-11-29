module.exports = (app) => {
  let home = require('../controller/HomeController');
  let passion = require('../controller/PassionController');

  // Home Route
  app.route('/').get(home.index);
  app.route('/api/v1/').get(home.index);

  // Passion
  app.route('/api/v1/passions').get(passion.getAllPassion);
  app.route('/api/v1/passions/:id').get(passion.getPassion);
  app.route('/api/v1/passions').post(passion.storePassion);
};
