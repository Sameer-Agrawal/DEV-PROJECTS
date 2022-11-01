// find output:

let obj = {
  a: {
    b: { e: { string: "string" } },
    c: { boolean: true },
  },
  d: {
    f: {
      g: {
        h: { null: null },
        i: { undefined: "defined" },
      },
    },
  },
};

let {  // Destructuring
  a: {
    b: {
      e: { string },  // "string"
    },
  },
} = obj;

let {
  d: {
    f: {
      g: {
        i: { undefined },  // "defined"
      },
    },
  },
} = obj;

// console.log(`${string}-${undefined}`);

// options:

// A) string-undefined

// B) string-defined --> ANS

// C) Error
