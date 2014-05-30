'use strict';

var markx = require('markx');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  markx({input: content}, this.async());
};
