class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAlive = true;
  }
  greet() {
    console.log(`Hello this is ${this.firstName} ${this.lastName}`);
  }
}

class Writer extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  signBook() {
    let newString = this.firstName.toLowerCase() + this.lastName.toLowerCase();
    let reversedArray = newString.split("");
    reversedArray.reverse();
    let reversedString = reversedArray.join("");
    console.log(`Greetings from the great ${reversedString}`);
  }
}

class Developer extends Person {
  constructor(firstName, lastName, codename) {
    super(firstName, lastName);
    this.codename = codename;
  }
  impress() {
    console.log(
      `001101\n100111\n111101\n011100\n101001\nGreetings from ${this.codename}`
    );
  }
}

class Singer extends Person {
  constructor(firstName, lastName, melody) {
    super(firstName, lastName);
    this.melody = melody;
  }
  artisticName = `Fancy ${this.firstName} Fancy ${this.lastName}`;
  sing() {
    console.log(this.melody);
    console.log(this.melody);
    console.log(this.melody);
  }
}

class JuniorDeveloper extends Developer {
  constructor(firstName, lastName, codename) {
    super(firstName, lastName, codename);
    this.isStruggling = true;
  }
  complain() {
    let capitalCodeName = this.codename.toUpperCase();
    console.log(capitalCodeName);
  }
  workHard() {
    let counter = 0;
    while (counter < 10) {
      console.log(`${this.codename} is working hard`);
      counter += 1;
    }
  }
}

const thoedor = new Writer("Theodor", "Jackson");
const laurent = new Developer("Laurent", "Hoxhaj", "Ping Pong King");
const stefanie = new Singer("Stefanie", "Huber", "Im singing in the rain");
const nenad = new JuniorDeveloper("Nenad", "Haefeli", "Some Name");

thoedor.signBook();
laurent.impress();
stefanie.sing();
console.log(stefanie.artisticName);
nenad.complain();
nenad.workHard();

console.log(laurent.prototype);

console.log("1. What’s the __proto__ of Person?");
console.log("-> Function");
console.log("2. What’s the prototype of Writer?");
console.log("-> Person");
console.log("3. Does laurent have a __proto__ or a prototype? Why?");
console.log(
  "-> __proto__ because it refers to that blueprint and dont have its own blueprint"
);
console.log("4. What is the difference between __proto__ and prototype?");
console.log(
  "-> prototype is the blueprint and __proto__ refers to that blueprint"
);
