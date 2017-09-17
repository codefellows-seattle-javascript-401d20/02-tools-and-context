'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map should return an array of n items in iterable', () => {
    expect(fp.map((n) => n)).toEqual('Data is required!');
    expect(fp.map((n) => n, ([1, 2, 3]))).toEqual([1, 2, 3]);
    expect(fp.map((n) => n, 123456)).toEqual('Data must be iterable!');
    expect(fp.map((n) => n, 'hello world')).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  });
});

describe('#filter', () => {
  test('filter should return an array of n items meeting condition', () => {
    expect(fp.filter((n) => n > 2)).toEqual('Data is required!');
    expect(fp.filter((n) => n > 2, ([1, 2, 3]))).toEqual([3]);
    expect(fp.filter((n) => n > 2, 123456)).toEqual('Data must be iterable!');
    expect(fp.filter((n) => n > 2, ['cat', 1, 4, 'by', 'chair'])).toEqual([4]);
  });
});

describe('#reduce', () => {
  test('map should return combined data', () => {
    expect(fp.reduce((p, n) => p + n)).toEqual('Initial State and Data are both required!');
    expect(fp.reduce((p, n) => p + n, '_start_')).toEqual('Initial State and Data are both required!');
    expect(fp.reduce((p, n) => p + n, '_start_', '_end_')).toEqual('_start__end_');
    expect(fp.reduce((p, n) => p + n, ([123]), ([456]))).toEqual('123456');
    expect(fp.reduce((p, n) => p + n, 123, 456)).toEqual('Data must be iterable!');
    expect(fp.reduce((p, n) => p + n, ['cat', 'by', 'chair'], ['dog'])).toEqual('cat,by,chairdog');
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
