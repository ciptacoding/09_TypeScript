// member visibility
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name;
  }
}
const person = new Person("Risky");
console.log(person.getName());
// The this keyword in a class usually refers to the instance of the class. Read more about this here.



// Parameter Properties
class Animal {
  public constructor(private name: string) { }

  public getName(): string {
    return this.name;
  }
}
const hewan = new Animal("Lion");
console.log(hewan.getName());



//Readonly
class Car {
  private readonly color: string;

  public constructor(color: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.color = color;
  }

  public getName(): string {
    return this.color
  }
}

const avanza = new Car("Black");
console.log(avanza.getName());