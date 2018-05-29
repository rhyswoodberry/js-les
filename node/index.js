const { students, teachers } = require('./app/index.js')

students.forEach( student => {
  console.log(student)
})

teachers.forEach(teacher => {
  console.log(teacher)
})