'use strict';

module.exports = {
  map: function (callback, collection) {
    if(!(callback instanceof Function)) throw new Error('first parameter is not a function');
    if(!(collection instanceof Array) && (typeof collection !== 'string')) throw new Error('second parameter is not an array or string');
    return Array.prototype.map.call(collection, callback);
  },
  filter: function (callback, collection) {
    return Array.prototype.filter.call(collection, callback);
  },
};
