// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

// A constructor function return's a reference to an object


function Person(name, age, qualification){
    this.name = name;  // this refer, empty object, memory location
    this.age = age;
    this.qualification = qualification;
}


const entity1 = new Person("Sameer", 21, "Graduate"); 
// Empty object creation, followed by memory address, assignment