'use strict';

const fp = module.exports = {};

fp.map = (cb, ctx) => {
  return Array.prototype.map.call(ctx, cb);
};

fp.filter = (cb, ctx) => {
  return Array.prototype.filter.call(ctx, cb);
};

fp.reduce = () => {};
fp.slice = () => {};
