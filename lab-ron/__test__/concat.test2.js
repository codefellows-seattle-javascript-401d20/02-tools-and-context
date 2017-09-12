'use strict';

const concat = require('../lib/concat.js');

describe('#concat', () => {
  test('concat with no value should return an empty array', () => {
    expect(concat()).toBe(null);
  });

  test('concat with one or more values should return a string with value a + b', () => {
    expect(concat('a', 'b')).toBe(['a', 'b']);
    expect(concat('Hello', 'World')).toBe(['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']);
    expect(concat('Hello', 3)).toBe(['H', 'e', 'l', 'l', 'o', 3]);
    expect(concat(3, 9)).toBe([3, 9]);
    expect(concat('Hello World')).toBe(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
    expect(concat('Hello World')).toBe(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
  });

});
