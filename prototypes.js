let person1 = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: function() {
    return this.firstName + '' + this.lastName
  }
}

function makePerson(firstName, lastName) {
  let obj = {}
  obj.name = {}
  obj.name.first = firstName
  obj.name.last = lastName
  Object.setPrototypeOf(obj, person1)
  return obj
}

person2 = makePerson('Jane', 'Smith')