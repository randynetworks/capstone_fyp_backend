module.exports = (app) => {
  let home = require('../controller/HomeController');
  let passion = require('../controller/PassionController');
  let platform = require('../controller/PlatformController');
  let comment = require('../controller/CommentController');

  // Home Route
  app.route('/').get(home.index);
  app.route('/api/v1/').get(home.index);

  // Passion
  app.route('/api/v1/passions').get(passion.getAllPassion);
  app.route('/api/v1/passions/:id').get(passion.getPassion);
  app.route('/api/v1/passions').post(passion.storePassion);
  app.route('/api/v1/passions').put(passion.updatePassion);
  app.route('/api/v1/passions').delete(passion.destroyPassion);

  // Platforms
  app.route('/api/v1/platforms').get(platform.getAllPlatform);
  app.route('/api/v1/platforms/:id').get(platform.getPlatform);
  app.route('/api/v1/platforms/:id/comments').get(platform.getPlatformComments);
  app.route('/api/v1/platforms').post(platform.storePlatform);
  app.route('/api/v1/platforms').put(platform.updatePlatform);
  app.route('/api/v1/platforms').delete(platform.destroyPlatform);

  // Comments
  app.route('/api/v1/comments/:id').get(comment.getComment);
  app.route('/api/v1/comments').post(comment.storeComment);
  app.route('/api/v1/comments').put(comment.updateComment);
  app.route('/api/v1/comments').delete(comment.destroyComment);
};
