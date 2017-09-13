'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('fp.map(el => el * 2, [0,1,2,3]) should return [0,2,4,8]', () => {
    let result = fp.map(el => el * 2, [0,1,2,3]);
    expect(result).toEqual([0,2,4,6]);
  });
  test(`Invoking fp.map() with an invalid first parameter should return ${fp.errors.mapErr}`, () => {
    expect(() => {fp.map('potato', [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(1, [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map([], [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map({}, [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(null, [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(undefined, [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(true, [0,1,2]);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(NaN, [0,1,2]);}).toThrowError(fp.errors.mapErr);
  });
  test(`Invoking fp.map() with an invalid second parameter should return ${fp.errors.mapErr}`, () => {
    expect(() => {fp.map(el => el * 2, 'potato');}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, 1);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, test => test);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, null);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, undefined);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, true);}).toThrowError(fp.errors.mapErr);
    expect(() => {fp.map(el => el * 2, NaN);}).toThrowError(fp.errors.mapErr);
  });
});

describe('#filter', () => {
  test('fp.filter(el => el > 2, [0,1,2,3,4,5]) should return [3,4,5]', () => {
    let result = fp.filter(el => el > 2, [0,1,2,3,4,5]);
    expect(result).toEqual([3,4,5]);
  });
  test(`Invoking fp.filter() with an invalid first parameter should return ${fp.errors.filterErr}`, () => {
    expect(() => {fp.filter('potato', [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(1, [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter([], [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter({}, [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(null, [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(undefined, [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(true, [0,1,2]);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(NaN, [0,1,2]);}).toThrowError(fp.errors.filterErr);
  });
  test(`Invoking fp.filter() with an invalid second parameter should return ${fp.errors.filterErr}`, () => {
    expect(() => {fp.filter(el => el * 2, 'potato');}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, 1);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, test => test);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, null);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, undefined);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, true);}).toThrowError(fp.errors.filterErr);
    expect(() => {fp.filter(el => el * 2, NaN);}).toThrowError(fp.errors.filterErr);
  });
});

describe('#reduce', () => {
  test('fp.reduce((acc, val) => acc += val, 0, [0,1,2,3])), should equal 6', () => {
    let result = fp.reduce((acc, val) => acc += val, 0, [0,1,2,3]);
    expect(result).toEqual(6);
  });
  test('fp.reduce((acc, val) => acc += val, "", ["h","e","l","o"])), should equal "hello"', () => {
    let result = fp.reduce((acc, val) => acc += val, '', ['h','e','l','l','o']);
    expect(result).toEqual('hello');
  });
  test(`Invoking fp.reduce() with an invalid first parameter should return ${fp.errors.reduceErr}`, () => {
    expect(() => {fp.reduce('potato', 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce(1, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce([], 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce({}, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce(null, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce(undefined, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce(true, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce(NaN, 0 [0,1,2]);}).toThrowError(fp.errors.reduceErr);
  });
  test(`Invoking fp.reduce() with an invalid third parameter should return ${fp.errors.reduceErr}`, () => {
    expect(() => {fp.reduce((acc, val) => acc += val, 0, 'potato');}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, 1);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, test => test);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, null);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, undefined);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, true);}).toThrowError(fp.errors.reduceErr);
    expect(() => {fp.reduce((acc, val) => acc += val, 0, NaN);}).toThrowError(fp.errors.reduceErr);
  });
});

describe('#concat', () => {
  test('fp.concat([0,1,2], [3,4,5]), should return [0,1,2,3,4,5]', () => {
    let result = fp.concat([0,1,2],[3,4,5]);
    expect(result).toEqual([0,1,2,3,4,5]);
  });
  test('fp.concat(["a","b","c"], ["d","e","f"]), should return ["a","b","c","d","e","f"]', () => {
    let result = fp.concat(['a','b','c'], ['d','e','f']);
    expect(result).toEqual(['a','b','c','d','e','f']);
  });
  test('fp.concat({0: "a", 1: "b"}, {3: "c", 4: "d"}), should return [{0: "a", 1: "b", 3: "c", 4: "d"}]', () => {
    let result = fp.concat({0: 'a', 1: 'b'}, {0: 'c', 1: 'd'});
    expect(result).toEqual({0: 'a', 1: 'b', 2: 'c', 3: 'd'});
  });
  test('fp.concat([0,1,2], {0: 3, 1: 4}), should return [0,1,2,3,4]', () => {
    let result = fp.concat([0,1,2],{0: 3, 1: 4});
    expect(result).toEqual([0,1,2,3,4]);
  });
  test('fp.concat({0:"a",1:"b"}, ["c", "d"]) should return {0:"a",1:"b",2:"c",3:"d"}', () => {
    let result = fp.concat({0:'a',1:'b'}, ['c', 'd']);
    expect(result).toEqual({0:'a',1:'b',2:'c',3:'d'});
  });
  test(`Invoking fp.concat() with an invalid first parameter should return ${fp.errors.concatErr}`, () => {
    expect(() => {fp.concat('potato', [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(1, [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(test => test, [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(null, [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(undefined, [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(true, [0,1,2]);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat(NaN, [0,1,2]);}).toThrowError(fp.errors.concatErr);
  });
  test(`Invoking fp.concat() with an invalid second parameter should return ${fp.errors.concatErr}`, () => {
    expect(() => {fp.concat([0,1,2], 'potato');}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], 1);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], test => test);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], null);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], undefined);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], true);}).toThrowError(fp.errors.concatErr);
    expect(() => {fp.concat([0,1,2], NaN);}).toThrowError(fp.errors.concatErr);
  });
});
describe('#slice', () => {
  test('fp.slice(1, 3, ["a", "b", "c", "d", "e"]) should return ["b", "c"]', () => {
    let result = fp.slice(1, 3, ['a', 'b', 'c', 'd', 'e']);
    expect(result).toEqual(['b','c']);
  });
  test('Invoking fp.slice with end > array.length will include the entire array after begin', () => {
    let result = fp.slice(1, 10, ['a', 'b', 'c', 'd', 'e']);
    expect(result).toEqual(['b','c','d','e']);
  });
  test('Invoking fp.slice with begin > array.length will return an empty array', () => {
    let result = fp.slice(10, 3, ['a', 'b', 'c', 'd', 'e']);
    expect(result).toEqual([]);
  });
  test('Invoking fp.slice with begin as a negative number will return the offset from end of array', () => {
    let result = fp.slice(-11, 20, ['a', 'b', 'c', 'd', 'e']);
    expect(result).toEqual(['a','b','c','d','e']);
  });
  test('fp.slice(1, 3, {0:"a", 1:"b", 2:"c", 3:"d", 4:"e"}) should return {0:"b",1:"c"}', () => {
    let result = fp.slice(1, 3, {0:'a', 1:'b', 2:'c', 3:'d', 4:'e'});
    expect(result).toEqual({0:'b', 1:'c'});
  });
  test(`Invoking fp.slice() with an invalid first parameter should return ${fp.errors.sliceErr}`, () => {
    expect(() => {fp.slice('potato', 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice([], 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice({}, 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(null, 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(undefined, 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(true, 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(NaN, 3 [0,1,2]);}).toThrowError(fp.errors.sliceErr);
  });
  test(`Invoking fp.slice() with an invalid second parameter should return ${fp.errors.sliceErr}`, () => {
    expect(() => {fp.slice(1, 'potato', [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, [], [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, {}, [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, null, [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, undefined, [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, true, [0,1,2]);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, NaN, [0,1,2]);}).toThrowError(fp.errors.sliceErr);
  });
  test(`Invoking fp.slice() with an invalid third parameter should return ${fp.errors.sliceErr}`, () => {
    expect(() => {fp.slice(1, 4, 'potato');}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, 4, null);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, 4, undefined);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, 4, true);}).toThrowError(fp.errors.sliceErr);
    expect(() => {fp.slice(1, 4, NaN);}).toThrowError(fp.errors.sliceErr);
  });
});
