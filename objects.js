let person1 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: function() {
    return this.firstName + '' + this.lastName
  }
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.fullName())


let person2 = {
  name: {first: 'John', last: 'Smith' },
  fullName: function() {
    return this.name.first + '' + this.name.last
  }
}

console.log(person2.name.first)
console.log(person2.name.last)