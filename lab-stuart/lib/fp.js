'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  return Array.prototype.map.call(collection, callback);
}

fp.filter = (callback, collection) => {
  return Array.prototype.filter.call(collection, callback);
}

fp.reduce = (callback, initialState, collection) => {
  return Array.prototype.reduce.call(collection, callback, initialState);
}

fp.concat = (collectionB, collectionA) => {
  return Array.prototype.concat.call(collectionB, collectionA);
}

fp.slice = (begin, end, collection) => {
  return Array.prototype.slice.call(collection, begin, end);
}
