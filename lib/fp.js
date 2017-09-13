'use strict';

module.exports = {
  map: (cb, ctx) => {
    if(typeof ctx === 'string' || Array.isArray(ctx))
      return Array.prototype.map.call(ctx,cb);
    return 'You must enter an array or string and its callback!';
  },
  filter: (cb, ctx) => {
    if(Array.isArray(ctx) && ctx.length > 0)
      return Array.prototype.filter.call(ctx, cb);
    return 'You must enter a non-empty array and its callback!';
  },
  reduce: (...args) => {
    let ctx=args[0];
    let arg=Array.prototype.slice.call(args, 1);
    if(Array.isArray(ctx) && ctx.length > 0)
      return Array.prototype.reduce.apply(ctx, arg);
    return 'You must enter a non-empty array to reduce!';
  },

  // slice: () => {
  //
  // }
};
