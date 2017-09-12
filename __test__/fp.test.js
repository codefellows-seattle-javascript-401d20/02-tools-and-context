'use strict';

const fp = require('../lib/fp.js');

test('map() should return HELLO WORLD', () => {
  let result = fp.map((n) => n.toUpperCase(), 'hello world');
  expect(result).toEqual(['H','E','L','L','O',' ','W','O','R','L','D']);
});

test('filter() should return woooooooooooooo', () => {
  let result = fp.map((n) => n.toUpperCase(), 'hello world');
  expect(result).toEqual(['H','E','L','L','O',' ','W','O','R','L','D']);
});
