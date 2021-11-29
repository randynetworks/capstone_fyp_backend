'use strict';

let response = require('../res')
let connection = require('../config/connection')

exports.index = (req, res) => {
    response.ok('Aplication is running well', res);
}