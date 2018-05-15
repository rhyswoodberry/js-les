class Person {
  constructor(firstName, lastName) {
    this.name = {}
    this.name.first = firstName
    this.name.last = lastName
  }

  fullName() {
    return this.name.first + ' ' + this.name.last
  }

}

person = new Person('Jonh', 'Citizen')
console.log(person.fullName())

class Employee extends Person {
	constructor(firstName, lastName)
}
