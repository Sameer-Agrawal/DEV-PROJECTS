// The sort() method, sorts the elements of an array
// The sort() overwrites the original array.
// The sort() method, sorts the elements as strings in alphabetical / ascending order.

// Compare function

// Sorting alphabetically works well for strings ("Apple" comes before "Banana").
// But, sorting numbers can produce incorrect results, as "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function"


// A function that construct a sort order. The function, return a negative, zero, or positive value, depending on the arguments --> 
// function(a, b){return a-b}

// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// The sort function will sort 40 as a value lower than 100.
// When comparing 40 and 100, sort() calls the function(40,100).
// The function calculates 40-100, and returns -60 (a negative value).
