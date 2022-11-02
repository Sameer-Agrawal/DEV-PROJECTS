// Find output:

function* f(...a) {  // Generator function
  // console.log(a);  // Represent an array
  let s = new Set();
  for (x in a) {
    // console.log(x);  // Represent index
    s.add(a[x]);
    yield a[x];
  }
  yield s;
}

let f1 = f(3, 2, 1);

while (true) {
  let yv = f1.next().value;  // { 3 , 2 , 1 }

  if (typeof yv == "object") {
    console.log(yv);
    yv.add(3);
    console.log(yv);
    break;
  }

}

// ANS --> C

// options:

// A) infinite loop
// B) error
// C)
//     Set {1,2,3}
//     Set {1,2,3}
// D)
//     Set {1,2}
//     Set {1,2,3}