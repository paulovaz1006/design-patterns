function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'John',
  lastName: 'John',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1);
console.log(person1.fullName());
