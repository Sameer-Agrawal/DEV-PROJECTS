// find output:

let a = [1, 2, 2, 3, 4, 5, 5];

let s = new Set([...a]);

console.log(s);  // Set hold's up, unique entity { 1 , 2 , 3 , 4 , 5 }

for (let i = 1; i < 5; i++) {
  s.delete(i);  // Entity removal, set
}

console.log(s);  // { 5 }

s.clear();  // Empty, provided set

// console.log(s);  // {}  

for (let i = 1; i < 5; i++) {
  s.add(i);  // Append entity, set 
}

console.log(s);  // { 1 , 2 , 3 , 4 }

for (let i = 1; i < 5; i++) {
  s.add(i);  // Set hold's up unique entity
}

console.log(s);  // { 1 , 2 , 3 , 4 }


// options:

// A) --> ANS

// Set { 1, 2, 3, 4, 5 }
// Set { 5 }
// Set { 1, 2, 3, 4 }
// Set { 1, 2, 3, 4 }

// B)

// Set { 1, 2, 3, 4, 5 }
// Set {  }
// Set { 1, 2, 3, 4 }
// Set { 1, 2, 3, 4 }