'use strict';

const fp = module.exports = {};

fp.errors = {
  mapErr: 'Error: map was invoked with an invalid parameter.\n\tUsage: map(callback, collection)',
  reduceErr: 'Error: reduce was invoked with an invalid parameter.\n\tUsage: reduce(callback, initialState, collection)',
};

fp.map = (cb, ctx) => {
  if (typeof cb !== 'function')
    return fp.errors.mapErr;

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    return fp.errors.mapErr;

  return Array.prototype.map.call(ctx, cb);
};

fp.reduce = (cb, init, ctx) => {
  
  if (typeof cb !== 'function')
    return fp.errors.reduceErr;

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    return fp.errors.reduceErr;

  return Array.prototype.reduce.call(ctx, cb, init);
};
