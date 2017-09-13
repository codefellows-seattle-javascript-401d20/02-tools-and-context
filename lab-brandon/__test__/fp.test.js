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

describe('#reduce', ()=>{
  test('should sum numbers', ()=>{
    let result = fp.reduce((result, num) => result + num[1,2,3]);
    expect(result).toEqual(6);
  });
  test('should sum numbers', () => {
    let notes = [
      {
        title:'hello',
        votes:2,
      },
      {
        title:'dope',
        votes:5,
      },
      {
        title:'cool',
        votes:5,
      },
    ];
    {
      let result = fp.reduce((result, note) => {
        result.titles.push(note.titles);
        result.totalVotes += note.votes;
        return result;
      }, {titles: [], totalVotes:0}, notes);
      expect(result.title).toEqual(['hello', 'dope', 'cool']);
      expect(result.totalVotes).toEqual(12);
    }
  });
});
