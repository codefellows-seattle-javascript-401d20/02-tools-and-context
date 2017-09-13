'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('map should return an error message with non-array and non-string arguments', () => {
    expect(() => fp.map((n) => n.toLowerCase(), true)).toThrow('You must enter an array or string and its callback!');
    expect(() => fp.map()).toThrow('You must enter an array or string and its callback!');
    expect(() => fp.map(234)).toThrow('You must enter an array or string and its callback!');
  });

  test('map should return an array with array or string arguments', () => {
    expect(fp.map((n) => n.toLowerCase(), 'HELLO KATHERINE')).toEqual([ 'h', 'e', 'l', 'l', 'o', ' ', 'k', 'a', 't', 'h', 'e', 'r', 'i', 'n', 'e' ]);
    expect(fp.map((n) => n * 2, [2,3,4])).toEqual([4,6,8]);
    expect(fp.map((n) => n.toUpperCase(), ['h','e','l','l','o'])).toEqual([ 'H', 'E', 'L', 'L', 'O' ]);
  });
});

describe('#filter', () => {
  test('filter should return an error message with non-array or empty array arguments', () => {
    expect(() => fp.filter()).toThrow('You must enter a non-empty array and its callback!');
    expect(() => fp.filter((n) => n.length > 6)).toThrow('You must enter a non-empty array and its callback!');
    expect(() => fp.filter((n) => n > 6, [])).toThrow('You must enter a non-empty array and its callback!');
  });

  test('filter should return an array with non-empty array arguments', () => {
    expect(fp.filter((n) => n.length > 6, ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])).toEqual([ 'exuberant', 'destruction', 'present' ]);
    expect(fp.filter((n) => n > 6, [10, 12, 3, 9, 2, -9])).toEqual([ 10, 12, 9 ]);
    expect(fp.filter((n) => n === true, [true, 12, 3, 9, 2, -9])).toEqual([ true ]);
    expect(fp.filter((n) => n.length > 6, [[3,4], [7,45,3,8,9,3,23,7,5], [8,6,3,5,1], [2], ['hi','how','are','you','doing','today','?'], ['hi']])).toEqual([ [ 7, 45, 3, 8, 9, 3, 23, 7, 5 ],
      [ 'hi', 'how', 'are', 'you', 'doing', 'today', '?' ] ]);
  });
});

describe('#reduce', () => {
  test('reduce should return an error message with non-array or empty array arguments', () => {
    expect(() => fp.reduce()).toThrow('You must enter a non-empty array to reduce!');
    expect(() => fp.reduce([], (p, c) => p + c)).toThrow('You must enter a non-empty array to reduce!');
    expect(() => fp.reduce(453, (p, c) => p + c)).toThrow('You must enter a non-empty array to reduce!');
    expect(() => fp.reduce('hello', (p, c) => p + c)).toThrow('You must enter a non-empty array to reduce!');
  });

  test('reduce should return accumulated data with non-empty array arguments', () => {
    expect(fp.reduce([3,4,7], (p, c) => p + c)).toEqual(14);
    expect(fp.reduce(['k','a','t','h','e','r','i','n','e'], (p, c) => p + c)).toEqual('katherine');
    expect(fp.reduce(['katherine ate ',2,' cookies'], (p, c) => p + c)).toEqual('katherine ate 2 cookies');
    expect(fp.reduce(['The answer is ',true], (p, c) => p + c)).toEqual('The answer is true');
    expect(fp.reduce(['hi ',['katherine',' amy',' cat']], (p, c) => p + c)).toEqual('hi katherine, amy, cat');
  });
});

describe('#slice', () => {
  test('slice should return an error message with non-array or empty array arguments', () => {
    expect(() => fp.slice()).toThrow('You must enter a non-empty array to slice!');
    expect(() => fp.slice([], 1, 3)).toThrow('You must enter a non-empty array to slice!');
    expect(() => fp.slice(20, 1, 3)).toThrow('You must enter a non-empty array to slice!');
    expect(() => fp.slice('hi', 1, 3)).toThrow('You must enter a non-empty array to slice!');
  });

  test('slice should return an array with non-empty array arguments', () => {
    expect(fp.slice([1,3,6,10], 1, 3)).toEqual([ 3, 6 ]);
    expect(fp.slice(['katherine','amy','usagi','yuri'], 1, 3)).toEqual([ 'amy', 'usagi' ]);
    expect(fp.slice([true,false,false,false,true], 3, 5)).toEqual([ false, true ]);
    expect(fp.slice(['hi ',['katherine',' amy',' cat'],'how are you','today'], 1, 3)).toEqual([ [ 'katherine', ' amy', ' cat' ], 'how are you' ]);
  });
});
