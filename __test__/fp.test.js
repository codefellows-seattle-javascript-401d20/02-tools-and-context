'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map should return an error message with non-array and non-string arguments', () => {
    expect(fp.map((n) => n.toLowerCase(), true)).toEqual('You must enter an array or string and its callback!');
    expect(fp.map()).toEqual('You must enter an array or string and its callback!');
    expect(fp.map(234)).toEqual('You must enter an array or string and its callback!');
  });

  test('map should return an array with array or string arguments', () => {
    expect(fp.map((n) => n.toLowerCase(), 'HELLO KATHERINE')).toEqual([ 'h', 'e', 'l', 'l', 'o', ' ', 'k', 'a', 't', 'h', 'e', 'r', 'i', 'n', 'e' ]);
    expect(fp.map((n) => n * 2, [2,3,4])).toEqual([4,6,8]);
    expect(fp.map((n) => n.toUpperCase(), ['h','e','l','l','o'])).toEqual([ 'H', 'E', 'L', 'L', 'O' ]);
  });
});

describe('#filter', () => {
  test('filter should return an error message with non-array arguments', () => {
    expect(fp.filter()).toEqual('You must enter a non-empty array and its callback!');
    expect(fp.filter((n) => n.length > 6)).toEqual('You must enter a non-empty array and its callback!');
    expect(fp.filter((n) => n > 6, [])).toEqual('You must enter a non-empty array and its callback!');
  });

  test('filter should return an array with array arguments', () => {
    expect(fp.filter((n) => n.length > 6, ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])).toEqual([ 'exuberant', 'destruction', 'present' ]);
    expect(fp.filter((n) => n > 6, [10, 12, 3, 9, 2, -9])).toEqual([ 10, 12, 9 ]);
    expect(fp.filter((n) => n === true, [true, 12, 3, 9, 2, -9])).toEqual([ true ]);
    expect(fp.filter((n) => n.length > 6, [[3,4], [7,45,3,8,9,3,23,7,5], [8,6,3,5,1], [2], ['hi','how','are','you','doing','today','?'], ['hi']])).toEqual([ [ 7, 45, 3, 8, 9, 3, 23, 7, 5 ],
      [ 'hi', 'how', 'are', 'you', 'doing', 'today', '?' ] ]);
  });
});
