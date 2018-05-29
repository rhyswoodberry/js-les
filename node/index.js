const _ = require('loadash')
const { students, teachers } = require('./app')
const fs = require('fs')

students.forEach( student => {
  console.log(student)
})

teachers.forEach(teacher => {
  console.log(teacher)
})

fs.readFile('./package.jon', (err, data) => {
  if (err) throw err; 
  console.log(data.constructor.name)
  console.log(data);
});