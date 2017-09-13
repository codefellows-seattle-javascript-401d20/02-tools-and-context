'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map passes an argument and runs a function to each element', () => {
    expect(fp.map(n => n.toUpperCase(), 'hello')).toEqual(['H', 'E', 'L', 'L', 'O']);
    expect(fp.map(n => n * n, [2, 3, 4])).toEqual([4, 9, 16]);
  });
});
