'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map passes an argument and runs a function to each element', () => {
    expect(fp.map(n => n.toUpperCase(), 'hello')).toEqual(['H', 'E', 'L', 'L', 'O']);
    expect(fp.map(n => n * n, [2, 3, 4])).toEqual([4, 9, 16]);
  });
});

describe('#filter', () => {
  test('filter passes an argument and filters through each element', () => {
    expect(fp.filter(n => n > 3, [1, 2, 3, 4, 5, 6, 7])).toEqual([4, 5, 6, 7]);
    expect(fp.filter(s => s.length === 5, ['car', 'truck', 'plane', 'bike', 'boat']))
      .toEqual(['truck', 'plane']);
  });
});

