'use strict';

const fp = module.exports = {};

fp.errors = {
  mapErr: 'Error: map was invoked with an invalid parameter. Usage: map(callback, collection)',
  filterErr: 'Error: filter was invoked with an invalid parameter. Usage: filter(callback, collection)',
  reduceErr: 'Error: reduce was invoked with an invalid parameter. Usage: reduce(callback, initialState, collection)',
  concatErr: 'Error: concat was invoked with an invalid parameter. Usage: concat(collection, collection)',
  sliceErr: 'Error: concat was invoked with an invalid parameter. Usage: concat(collection, collection)',
};

fp.map = (cb, ctx) => {
  if (typeof cb !== 'function')
    throw new Error(fp.errors.mapErr);

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.mapErr);

  return Array.prototype.map.call(ctx, cb);
};

fp.filter = (cb, ctx) => {
  if (typeof cb !== 'function')
    throw new Error(fp.errors.filterErr);

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.filterErr);

  return Array.prototype.filter.call(ctx, cb);
};

fp.reduce = (cb, init, ctx) => {

  if (typeof cb !== 'function')
    throw new Error(fp.errors.reduceErr);

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.reduceErr);

  return Array.prototype.reduce.call(ctx, cb, init);
};

fp.concat = (ctxA, ctxB) => {

  if (typeof ctxA !== 'object' || ctxA === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.concatErr);

  if (typeof ctxB !== 'object' || ctxB === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.concatErr);

  // If ctxA and ctxB are both objects and not arrays, return an object.
  if (!Array.isArray(ctxA) && !Array.isArray(ctxB))
    return Array.prototype.concat.call(Object.values(ctxA), Object.values(ctxB)).reduce((acc, val, index) => {
      acc[index] = val;
      return acc;
    },
      {});

  // If ctxA is an object and ctxB is an array, return an object.
  if (!Array.isArray(ctxA))
    return Array.prototype.concat.call(Object.values(ctxA), ctxB).reduce((acc, val, index) => {
      acc[index] = val;
      return acc;
    },
      {});

  // If ctxA is an array and ctxB is an object, return an array.
  if (!Array.isArray(ctxB))
    return Array.prototype.concat.call(ctxA, Object.values(ctxB));

  // If both arrays, return array.
  return Array.prototype.concat.call(ctxA, ctxB);
};

fp.slice = (begin, end, ctx) => {

  if (typeof begin !== 'number' || isNaN(begin)) // Edge case: typeof NaN (not a number) is a number...
    throw new Error(fp.errors.sliceErr);

  if (typeof end !== 'number' || isNaN(end)) // Edge case: typeof NaN (not a number) is a number...
    throw new Error(fp.errors.sliceErr);

  if (typeof ctx !== 'object' || ctx === null) // Edge case: null is considered an object...
    throw new Error(fp.errors.sliceErr);

  // If ctx is an object but not an array
  if (!Array.isArray(ctx))
    return Array.prototype.slice.call(Object.values(ctx), begin, end).reduce((acc, val, index) => {
      acc[index] = val;
      return acc;
    },
      {});

  return Array.prototype.slice.call(ctx, begin, end);
};
