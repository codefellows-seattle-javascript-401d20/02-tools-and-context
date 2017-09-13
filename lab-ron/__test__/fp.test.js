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

describe('#reduce', () => {
  test('reduce passes an array of arguments and reduces them to a single value', () => {
    expect(fp.reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]
    )).toEqual(15);
    expect(fp.reduce((a, b) => a + b, '', ['h', 'e', 'l', 'l', 'o']
    )).toEqual('hello');
  });
});

describe('#slice', () => {
  test(`slice takes in an array like value and divides into an array ranging between the beginning and end value`, () => {
    expect(fp.slice(2, 10, 'Alex, Billy, Cassie')).toEqual(['e', 'x', ',', ' ', 'B', 'i', 'l', 'l']);
    expect(fp.slice(1, 3, [0, 1, 2, 3, 4, 5, 6])).toEqual([1, 2]);
  });
});




