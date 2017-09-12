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
  }


  // fp.reduce = (cb, intSt, ctx) => {
  //   return Array.prototype.reduce.call(cb, intSt, ctx);
  // }
  //
  // fp.concat = () => {
  //
  // }
  //
  // fp.slice = () => {
  //
  // }
};
