const fp = module.exports = {};

fp.map = (cb, ctx) => {
  if(!ctx.length)
    throw new Error('expected array like object');
  return Array.prototype.map.call(ctx, cb);
};

fp.reduce = (...args) => {
  let collection = args.splice(-1)[0];
  return Array.prototype.reduce.apply(collection, args);
};
fp.filter = (cb, ctx) => {
  return Array.prototype.filter.call(ctx, cb);
};
fp.slice = (begin, end, ctx) => {
  return Array.prototype.slice.call(ctx, begin, end);
};
