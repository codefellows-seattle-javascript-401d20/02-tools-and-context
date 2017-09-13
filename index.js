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
// console.log(fp.filter((n) => n.length > 6, [[3,4], [7,45,3,8,9,3,23,7,5], [8,6,3,5,1], [2], ['hi','how','are','you','doing','today','?'], ['hi']]));

// invalid
// console.log(fp.filter());
// console.log(fp.filter((n) => n.length > 6));
// console.log(fp.filter((n) => n > 6, []));
// let cat = fp.reduce((p, c) => p + c)


//valid
// console.log(fp.reduce([3,4,7], (p, c) => p + c));
// console.log(fp.reduce(['k','a','t','h','e','r','i','n','e'], (p, c) => p + c));
// console.log(fp.reduce(['katherine ate ',2,' cookies'], (p, c) => p + c));
// console.log(fp.reduce(['The answer is ',true], (p, c) => p + c));
// console.log(fp.reduce(['hi ',['katherine',' amy',' cat']], (p, c) => p + c));

//invalid
// console.log(fp.reduce());
// console.log(fp.reduce([], (p, c) => p + c));
// console.log(fp.reduce(453, (p, c) => p + c));
console.log(fp.reduce('hello', (p, c) => p + c));
