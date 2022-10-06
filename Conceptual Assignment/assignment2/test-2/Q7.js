// Q - find output of the following:

let count = 0;
let interval = setInterval(function () {  // Return, an interval identifier
  console.log(count);
  count++;
}, 1000);

setTimeout(function () {
  clearInterval(interval);
  interval = setInterval(function () {
    console.log(count);
    count--;
    if (count < 0) clearInterval(interval);
  });  // setInterval, with a delay of 0sec
}, 5000);

// options:

// 1) Error

// 2) 0 1 2 3 4....

// 3) 0 1 2 3 4 4 3 2 1 0

// 4) 0 1 2 3 4 3 2 1 0  --> ANS
