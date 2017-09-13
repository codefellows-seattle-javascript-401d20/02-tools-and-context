const fp = module.exports = {};

fp.map = (cb, ctx) => {
  if(!ctx.length)
    throw new Error('expected array like object');
  return Array.prototype.map.call(ctx, cb);
};

fp.filter = (cb, ctx) =>{
  return Array.prototype.filter.call(ctx, cb);
};

fp.map((n)=> n * 2, fp.map((n) => n + 1, [1, 2, 3]));
// fp.badMap(fp.badMap([1,2,3], (n)=> n + 1), (n) => n * 2);
