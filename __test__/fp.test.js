'use strict';

const fp = require('../lib/fp.js');

test('map() should return HELLO WORLD', () => {
  let result = fp.map((n) => n.toUpperCase(), 'hello world');
  expect(result).toEqual(['H','E','L','L','O',' ','W','O','R','L','D']);
});

test('map() should error with bad first parameter', () => {
  try {
    let result = fp.map('hi', 'hello world');
  } catch (error) {
    expect(error.message).toEqual('first parameter is not a function');
  }
});

test('map() should error with bad second parameter', () => {
  try {
    let result = fp.map(() => {}, 44);
  } catch (error) {
    expect(error.message).toEqual('second parameter is not an array or string');
  }
});
