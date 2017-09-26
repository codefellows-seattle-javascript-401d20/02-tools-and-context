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
  test('should pass through each element', ()=>{
    let result = fp.filter(number => number > 5, [1,2,3,4,5,6]);
    expect(result).toEqual([6]);
  });
  test('should sum numbers', () => {
    let firstResult = fp.filter(l => l.length === 4, ['morty', 'rick', 'summer', 'jerry', 'beth']);
    let secondResult = fp.filter(l => l.length === 5, ['morty', 'rick', 'summer', 'jerry', 'beth']);
    expect(firstResult).toEqual(['rick', 'beth']);
    expect(secondResult).toEqual(['morty', 'jerry']);
  });
});

describe('#slice', ()=>{
  test('should sum numbers', ()=>{
    let result = fp.reduce((result, num) => result + num[1,2,3]);
    expect(result).toEqual(6);
  });
  test('should sum numbers', () => {
    expect(result.title).toEqual(['hello', 'dope', 'cool']);
    expect(result.totalVotes).toEqual(12);
  })
});
