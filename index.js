'use strict';

// assign to name of file you're referring to
const fp = require('./lib/fp.js');

// console.log(fp.map((n) => n.toUpperCase(), 'hello world'));
// console.log(fp.map());
// console.log(fp.map((n) => n * 2, 234));
// console.log(fp.map((n) => n.toUpperCase(), ['h','e','l','l','o']));
// console.log(fp.map(234));

// valid
// console.log(fp.filter((n) => n.length > 6, ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']));
// console.log(fp.filter((n) => n > 6, [10, 12, 3, 9, 2, -9]));
// console.log(fp.filter((n) => n === true, [true, 12, 3, 9, 2, -9]));
console.log(fp.filter((n) => n.length > 6, [[3,4], [7,45,3,8,9,3,23,7,5], [8,6,3,5,1], [2], ['hi','how','are','you','doing','today','?'], ['hi']]));

// invalid
// console.log(fp.filter());
// console.log(fp.filter((n) => n.length > 6));
// console.log(fp.filter((n) => n > 6, []));
