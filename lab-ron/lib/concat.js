'use strict';

module.exports = (...args) => {
  Array.prototype.concat.call(args, () => {
    return args[0].concat(args[1]);
  });

};

