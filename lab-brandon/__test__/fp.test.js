'use strict';

const fp = require('../lib/fp.js');

describe('#map', ()=>{
  test('should double numbers', ()=>{
    let result = fp.map((n)=> n * 2, [1,2,3]);
    expect(result).toEqual([2,4,6]);

  });
  test('should uppercase characters', ()=>{
    let result = fp.map((c)=> c.toUpperCase(), 'hi');
    expect(result).toEqual(['H', 'I']);
  });
  test('should throw error with non array like object', () => {
    let runTest = () => fp.map((n) => n * 2, {});
    expect(runTest).toThrow('expected array like object');
  });
});

describe('#reduce', ()=>{
  test('should reduce an array of args and return them as a single value', ()=>{
    expect(fp.reduce((a, b) => a + b, '', ['h', 'e', 'l', 'l', 'o'])).toEqual('hello');
    expect(fp.reduce((a, b) => a + b, 0, [3, 4, 5, 6, 7])).toEqual(25);
    expect(fp.reduce((result, num) => result + num, 5, [1,2,3])).toEqual(11);
    expect(fp.reduce((a,b) => a + b, 'heyyy', [1, 2, 3])).toEqual('heyyy123');
  });
});

describe('#filter', ()=>{
  test('should return all numbers greater than 5 ', ()=>{
    let result = fp.filter(number => number > 5, [1,2,3,4,5,6]);
    expect(result).toEqual([6]);
  });
  test('should filter out the names with a specific character count', () => {
    let firstResult = fp.filter(l => l.length === 4, ['morty', 'rick', 'summer', 'jerry', 'beth']);
    let secondResult = fp.filter(l => l.length === 5, ['morty', 'rick', 'summer', 'jerry', 'beth']);
    expect(firstResult).toEqual(['rick', 'beth']);
    expect(secondResult).toEqual(['morty', 'jerry']);
  });
});

describe('#slice', ()=>{
  test('should give an array of each value divided by commas', ()=>{
    let result = fp.slice(1, 5, 'Darth Vader, is Lukes faja');
    expect(result).toEqual(['a','r','t','h']);
    expect(fp.slice(0,4, [0, 1, 2, 3, 4, 5])).toEqual([0, 1, 2, 3]);
  });
});
