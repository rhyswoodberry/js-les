const _ = require('loadash')
const { students, teachers } = require('./app')

students.forEach( student => {
  console.log(student)
})

teachers.forEach(teacher => {
  console.log(teacher)
})