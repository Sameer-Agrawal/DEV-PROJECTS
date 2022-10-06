// Find the output of following :

function globalFunction(x) {
  return function outerFunction(y) {
    return function innerFunction(z) {
      return x + y + z;
    };
  };
}

let instance1 = globalFunction(2);  // After assignment, no more in temporal dead zone
var instance2 = instance1(3);
console.log(instance2());  // z --> undefined


// Options:

// 1) undefined
// 2) error
// 3) NaN  --> ANS
// 4) 5undefined

// Adding numbers to undefined results in NaN (not-a-number), which won't get you anywhere