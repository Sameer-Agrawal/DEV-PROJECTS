class Person{
    constructor(name, age){
        this.name = name;  // this refer, empty object, memory location
        this.age = age;
    }
    
    introduce(){  // Method
        console.log(`Hey, I'm ${this.name}. I'm ${this.age}!`)
    }
}


const entity1 = new Person("Sameer", 21);  
entity1.introduce();


// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods  --> Inheritance


class Student extends Person{  // Extends keyword, represent inheritance
    constructor(name, age, percentage){
        super(name, age);  // Invoke, constructor, parent class
        this.percentage = percentage;
    }
}


const entity2 = new Student("Shashwat", 16, 99)
entity2.introduce();

// Inheritance --> Attribute, method access, parent class