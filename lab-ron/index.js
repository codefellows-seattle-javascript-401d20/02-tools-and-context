const fp = require('./lib/fp.js');

console.log(fp.map(n => n.toUpperCase(), 'hello'));
console.log(fp.map(n => n * n, [2, 3, 4]));
console.log (fp.filter(n => n > 3, [1,2,3,4,5,6,7]));