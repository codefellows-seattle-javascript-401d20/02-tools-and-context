'use strict';

const fp = require('../lib/fp.js');

describe('#map', ()=>{
  test('should double numbers', ()=>{
    let result = fp.map((n)=> n * 2, [1,2,3]);
    expect(result).toEqual([2,4,6]);

  });
  test('should uppsercase chars', ()=>{
    let result = fp.map((c)=> c.toUpperCase(), 'hi');
    expect(result).toEqual(['H', 'I']);
  });
  test('should throw error with non array like object', () => {
    let runTest = () => fp.map((n) => n * 2, {});
    expect(runTest).toThrow('expected array like object');
  });
});

// describe('#filter', ()=>{
//   test('should double numbers', ()=>{
//     let result = fp.map;
//     expect(fp.map(n => n.toUpperCase(), 'hello')).toEqual(['H', 'E', 'L', 'L', 'O']);
//     expect(fp.map()).toEqual('Enter an array or string and its callback');
//     expect(fp.map(54)).toEqual('Enter an array or string and its callback');
//   });
//   test('should uppsercase chars', ()=>{
//
//   });
// });
