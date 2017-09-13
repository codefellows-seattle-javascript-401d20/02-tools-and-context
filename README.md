![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks
#### FP Module
Create a NodeJS module in the lib/ directory named fp.js that exports an object. Create iteratee-first data-last stand alone `map`, `filter`, `reduce`, and `slice` functions using the `call` and `apply` function methods. Define each function using ES6 lexical arrow function syntax. In each function error-check each paramiter and throw an Error with a meaningful message if the function is invoked with invalled arguments. Do not use any third party librarys in the FP module.

* `fp.map` and `fp.filter` should have the function signature `(callback, collection) => Array`
* `fp.reduce` should have the function signature `(callback, initialState, collection) => data`
* `fp.slice` should have the function signature `(begin, end, collection) => Array`

## Testing
#### FP Module Tests
Create a NodeJS module in the \_\_test\_\_/ named fp.test.js that asserts the correctness of the fp module.  

* Use BDD `describe` and `test` methods to define discriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure the fp module functions correctly error-check paramiters
  * Assert that the correct errors are thrown with invalid arguments
* Write tests to ensure the fp module functions returns the correct results when invoked with valid arguments

##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

## Bonus 2pts
* Create a second module fp-curry.js that is a refactered version of fp.js, where each function has curried arguments
* Create a fp-curry.test.js that is a refactured version of fp.curry.js that tests fp-curry.js
