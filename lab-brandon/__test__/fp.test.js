'use strict';

describe('#map', ()=>{
  test('map passes an argument to run a function for each element', ()=>{
    expect(fp.map(n => n.toUpperCase(), 'hello')).toEqual(['H', 'E', 'L', 'L', 'O']);
    expect(fp.map()).toEqual('Enter an array or string and its callback');
    expect(fp.map(54)).toEqual('Enter an array or string and its callback');
  })
});
