//Q- Transducer is a higher order function which takes 3 parameter => an array, a function used for filtering and another function to map values and returns the resultant array without mutation / side-effects!

// which of the following definitions is/are correct?


//A
function transducer(array, filterFunction, mapFunction) {  // Pure function
  let newArray = array.filter(filterFunction);  // Represent, filtered array
  newArray = newArray.map(mapFunction);  // Represent transformation, provided new array
  return newArray;
}


//B
function transducer(array, filterFunction, mapFunction) {
  let newArray = [];
  for (index in array) {
    if(filterFunction(array[index])) {  // Represent, whether array element meet criteria, return true otherwise false
      newArray.push(array[index]);
    }
  }

  for (index in newArray) {  // Index by index, transformation of an array element
    newArray[index] = mapFunction(newArray[index]);  // Represent, transformation of array element
  }
  return newArray;
}

// Options:

// 1) A
// 2) B
// 3) Both  --> ANS
// 4) None

