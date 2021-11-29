'use strict';

module.exports = (app) => {
    let json = require('../controller/controller')

    app.route('/').get(json.index);
}