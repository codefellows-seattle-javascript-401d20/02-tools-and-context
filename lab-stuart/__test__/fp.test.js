'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map should return an array of n items in iterable', () => {
    expect(fp.map((n) => n, 'hello world')).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  });
});

describe('#filter', () => {
  test('filter should return an array of n items meeting condition', () => {
    expect(fp.filter((n) => n > 2, ['cat', 1, 4, 'by', 'chair'])).toEqual([4]);
  });
});

describe('#reduce', () => {
  test('map should return combined data', () => {
    expect(fp.reduce((p, n) => p + n, '_start_', '_end_')).toEqual('_start__end_');
  });
});

describe('#concat', () => {
  test('concat should return a single combined array from two', () => {
    expect(fp.concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('#slice', () => {
  test('slice should return an array of the passed start / end', () => {
    expect(fp.slice(1, 4, 'hello world')).toEqual(['e', 'l', 'l']);
  });
});
