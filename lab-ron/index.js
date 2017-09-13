const fp = require('./lib/fp.js');

console.log(fp.map(n => n.toUpperCase(), 'hello'));
console.log(fp.map(n => n * n, [2, 3, 4]));
console.log(fp.filter(n => n > 3, [1, 2, 3, 4, 5, 6, 7]));
console.log(fp.filter(s => s.length === 5, ['car', 'truck', 'plane', 'bike', 'boat']));