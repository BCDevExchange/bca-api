'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.propertiesGet = function propertiesGet (req, res, next) {
  Default.propertiesGet(req.swagger.params, res, next);
};

module.exports.propertiesIdGet = function propertiesIdGet (req, res, next) {
  Default.propertiesIdGet(req.swagger.params, res, next);
};
