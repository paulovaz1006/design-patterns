const personPrototype = {
  firstName: 'John',
  lastName: 'John',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
