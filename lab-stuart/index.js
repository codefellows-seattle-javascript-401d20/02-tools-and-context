'use strict';

const fp = require('./lib/fp.js');

console.log(fp.map((n) => n, 'hello world'));
console.log(fp.filter((n) => n > 2, ['cat', 1, 4, 'by', 'chair']));
console.log(fp.reduce((p,n) => p + n, '_start_', '_end_'));
console.log(fp.concat([1, 2, 3], [4, 5, 6]));
console.log(fp.slice(1, 4, 'hello world'));
