"use strict";
// member visibility
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Risky");
console.log(person.getName());
// The this keyword in a class usually refers to the instance of the class. Read more about this here.
// Parameter Properties
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const hewan = new Animal("Lion");
console.log(hewan.getName());
//Readonly
class Car {
    constructor(color) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.color = color;
    }
    getName() {
        return this.color;
    }
}
const avanza = new Car("Black");
console.log(avanza.getName());
