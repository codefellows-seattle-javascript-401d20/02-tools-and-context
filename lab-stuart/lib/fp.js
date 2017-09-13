'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if (collection === undefined) {
    return 'Data is required!';
  } else if (!collection.length) {
    return 'Data must be iterable!';
  } else {
    return Array.prototype.map.call(collection, callback);
  }
}

fp.filter = (callback, collection) => {
  if (collection === undefined) {
    return 'Data is required!';
  } else if (!collection.length) {
    return 'Data must be iterable!';
  } else {
    return Array.prototype.filter.call(collection, callback);
  }
}

fp.reduce = (callback, initialState, collection) => {
  if (initialState === undefined || collection === undefined) {
    return 'Initial State and Data are both required!';
  } else if (!collection.length) {
    return 'Data must be iterable!';
  } else {
    return Array.prototype.reduce.call(collection, callback, initialState);
  }
}

fp.concat = (collectionB, collectionA) => {
  return Array.prototype.concat.call(collectionB, collectionA);
}

fp.slice = (begin, end, collection) => {
  if (begin === undefined || end === undefined || collection == undefined) {
    return 'Begin End and Collection are all required!';
  } else if (!collection.length) {
    return 'Data must be iterable!';
  } else {
    return Array.prototype.slice.call(collection, begin, end);
  }
}
