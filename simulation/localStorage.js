
// LocalStorage is a web storage mechanism that allows us to store data on the client's browser that persists even after the browser window is closed.

// The localStorage object allows you to save key/value pairs in the browser.
// The localStorage object/method stores data with no expiration date.
// The data is not deleted when the browser is closed, and are available for future sessions.

// Append key,value pair to browser, local storage
localStorage.setItem(1032180323, 'Sameer Atul Agrawal');  // Abstract --> Local Storage is an object, Holding up prototype key, inturn providing local storage manipulation capability!

// Retrieval, local storage, provided key
const Identity = localStorage.getItem(1032180323);
console.log(Identity);


// The sessionStorage object let you store key/value pairs in the browser.
// The sessionStorage object stores data for only one session.
// The data is deleted when the browser is closed.