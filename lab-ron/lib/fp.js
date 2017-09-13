'use strict';

const fp = module.exports = {};

fp.map = (cb, ctx) => {
  return Array.prototype.map.call(ctx, cb);
};

fp.filter = (cb, ctx) => {
  return Array.prototype.filter.call(ctx, cb);
};

fp.reduce = (cb, i, ctx) => {
  return Array.prototype.reduce.call(ctx, cb, i);
};

fp.slice = (begin, end, ctx) => {
  return Array.prototype.slice.call(ctx, begin, end);
};
