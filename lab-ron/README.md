# Tools and Context

This was Lab 2 of 401 JavaScript at Code Fellows

## fp.map()
`fp.map()` takes in a callback function and a collection as it's arguments and returns an array of the resulting map.
```
fp.map(n => n.toUpperCase(), 'hello');

>> ['H', 'E', 'L', 'L', 'O']

```
```
fp.map(n => n * n, [2, 3, 4]);

>> [4, 9, 16]
```

## fp.filter()
`fp.filter()` takes in a callback function and a collection as it's arguments and returns an array of the resulting filter.
```
fp.filter(n => n > 3, [1, 2, 3, 4, 5, 6, 7]);

>> [4, 5, 6, 7]
```
```
fp.filter(s => s.length === 5, ['car', 'truck', 'plane', 'bike', 'boat']);

>> ['truck', 'plane']
```

## fp.reduce()
`fp.reduce()` takes in a callback, an initial state, and the collection and returns a reduction based on the initial state

```
fp.reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]);

>> 15
```
```
fp.reduce((a, b) => a + b, '', [1, 2, 3, 4, 5]);

>> 12345
```
```
fp.reduce((a, b) => a + b, '', ['h', 'e', 'l', 'l', 'o']);

>> 'hello'
```

## fp.slice()
`fp.slice()` take in a beginning point, an ending point, and a collection of data and returns an array sliced from the numbers

```
fp.slice(2, 10, 'Alex, Billy, Cassie');

>> ['e', 'x', ',', ' ', 'B', 'i', 'l', 'l']
```
```
fp.slice(1, 3, [0, 1, 2, 3, 4, 5, 6]);

>> [1, 2]
```  


## fp.concat()

Currently `fp.concat()` is not working. Feature may be added at a later date

