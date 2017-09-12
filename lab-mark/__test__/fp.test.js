'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('fp.map(el => el * 2, [0,1,2,3]) should return [0,2,4,8]', () => {
    let result = fp.map(el => el * 2, [0,1,2,3]);
    expect(result).toEqual([0,2,4,6]);
  });
  test(`Invoking fp.map() with an invalid first parameter should return ${fp.errors.mapErr}`, () => {
    expect(fp.map('potato', [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map(1, [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map([], [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map({}, [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map(null, [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map(undefined, [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map(true, [0,1,2])).toEqual(fp.errors.mapErr);
    expect(fp.map(NaN, [0,1,2])).toEqual(fp.errors.mapErr);
  });
  test(`Invoking fp.map() with an invalid second parameter should return ${fp.errors.mapErr}`, () => {
    expect(fp.map(el => el * 2, 'potato')).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, 1)).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, test => test)).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, null)).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, undefined)).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, true)).toEqual(fp.errors.mapErr);
    expect(fp.map(el => el * 2, NaN)).toEqual(fp.errors.mapErr);
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
});
