![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Exported Values
#### FP Module
Exports an object. This module has a `map` method that transform arrays and strings into arrays, a `filter` method that returns an array holding values that meet specified conditions, a `reduce` method that returns accumulated data, and a `slice` method that returns an array holding values from a specified location in an array

* The `map` method has an arity of two
  * The correct data type for these parameters is array or string
  * If correct data is passed in, the function returns data transformed into a new array, for example `[ 'h', 'e', 'l', 'l', 'o', ' ', 'k', 'a', 't', 'h', 'e', 'r', 'i', 'n', 'e' ]` for `'HELLO KATHERINE'`
  * Else the function returns the error message `'You must enter an array or string and its callback!'`
* The `filter` method has an arity of two
  * The correct data type for these parameters is array
  * If correct data is passed in and it isn't empty, the function returns an array holding values that meet specified conditions, for example `[ 'exuberant', 'destruction', 'present' ]` for `['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']` values with a length greater than 6
  * Else the function returns the error message `You must enter a non-empty array and its callback!`
* The `reduce` method has an arity of one
  * The correct data type for these parameters is array
  * If correct data is passed in and it isn't empty, the function returns accumulated data, for example `'katherine ate 2 cookies'` for `['katherine ate ',2,' cookies']`
  * Else the function returns the error message `You must enter a non-empty array to reduce!`
* The `slice` method has an arity of three
  * The correct data type for these parameters is array
  * If correct data is passed in and it isn't empty, the function returns an array holding values from a specified location in an array, for example `[ 3, 6 ]` for `[1,3,6,10], 1, 3`
  * Else the function returns the error message `You must enter a non-empty array to slice!`
