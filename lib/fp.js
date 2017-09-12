'use strict';

module.exports = {
  map: function (callback, context){
    return Array.prototype.map.call(context, callback);
  },
  filter: function (callback, context){
    return Array.prototype.filter.call(context, callback);
  },
};
