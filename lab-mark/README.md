![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Code-401-Javascript Lab-2
===
This is day 2 of lab with Code Fellows and it teaches students some tools they can use for developing software as well as using context to be able to apply array methods to essentially any value that can index.
# Modules
Description of exported values of each module defined in lib/ directory, along with airity and expected input/return values.
### fp.js
Exports an object with sub methods that implement different methods that are included in the Javascript array prototype.
- ##### map()
  - The map method has an arity of two
  - The first parameter takes in a callback function.
  - The second parameter takes in any value that has the ability to access elements by index. This includes arrays, object literals, strings, argument pseudo array inside function() and DOM element arrays.
  - This function mimics the functionality of the map method in the Array prototype in javascript and allows it to be used with any value entered as the second parameter. Second parameter must be within limitation scope (see above).
- ##### filter()
  - The filter method has an arity of two
  - The first parameter takes in a callback function.
  - The second parameter takes in any value that has the ability to access elements by index. This includes arrays, object literals, strings, argument pseudo array inside function() and DOM element arrays.
  - This function mimics the functionality of the filter method in the Array prototype in javascript and allows it to be used with any value entered as the second parameter. Second parameter must be within limitation scope (see above).
- ##### reduce()
  - The reduce method has an arity of two
  - The first parameter takes in a callback function.
  - The second parameter takes in an initial state. This could be a string, integer, empty array/object, etc.
  - The third parameter takes in any value that has the ability to access elements by index. This includes arrays, object literals, strings, argument pseudo array inside function() and DOM element arrays.
  - This function mimics the functionality of the reduce method in the Array prototype in javascript and allows it to be used with any value entered as the second parameter. Second parameter must be within limitation scope (see above).
- ##### concat()
  - The concat method has an arity of two
  - The first parameter takes in a any value that has the ability to access elements by index.
  - The second parameter takes in any value that has the ability to access elements by index. This includes arrays, object literals, strings, argument pseudo array inside function() and DOM element arrays.
  - This function mimics the functionality of the concat method in the Array prototype in javascript and allows it to be used with any value entered as the second parameter. Second parameter must be within limitation scope (see above).
- ##### slice()
  - The slice method has an arity of three
  - The first parameter takes in a number that is the index where the slicing begins (inclusive)
  - The second parameter takes in a number that is the index where the slicing ends (exclusive)
  - This function mimics the functionality of the slice method in the Array prototype in javascript and allows it to be used with any value entered as the second parameter. Second parameter must be within limitation scope (see above).
