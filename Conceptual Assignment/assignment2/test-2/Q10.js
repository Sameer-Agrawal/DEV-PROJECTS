//Q- Find the output of the following:

let arr = ["a", "b", "c", "d", 1, 2, 3, 4];

arr.map(function (e) {  // Element, transformation of an array
  return 2 * e;
});  // Return, transformed array

(function () {
  arr.filter(function () {});
})();  // IIFE --> Immediately invoked function expression

console.log(arr);  // ["a", "b", "c", "d", 1, 2, 3, 4]

let nArr;
nArr = arr.filter(function (e) {  // [1, 2, 3, 4]
  return Number.isInteger(e);
});
nArr = new Array();  // New instance of an array!
console.log(nArr);  // []

nArr = arr
  .filter(function (e) {
    return !Number.isInteger(e);  // Not, an integer
  })  // ["a", "b", "c", "d"]
  .map(function (e) {
    return e + 1;
  });

console.log(nArr);

// Options:

// 1)
// []
// [1, 2, 3, 4]
// ['b', 'c', 'd', 'e']

// 2)
// ["a", "b", "c", "d", 1, 2, 3, 4];
// [1, 2, 3, 4]
// ["a1","b1","c1","d1"]

// 3)
// ["a", "b", "c", "d", 1, 2, 3, 4];
// []
// ['b', 'c', 'd', 'e']

// 4)  --> ANS
// [ 'a', 'b', 'c', 'd', 1, 2, 3, 4 ]
// []
// [ 'a1', 'b1', 'c1', 'd1' ]
