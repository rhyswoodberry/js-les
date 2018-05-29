const _ = require('lodash')
const { students, teachers } = require('./app')
const studentsRouter = require('express')

const express = require('express')
const app = express()
const port = 4000

// students.forEach( student => {
//   console.log(student)
// })

// teachers.forEach(teacher => {
//   console.log(teacher)
// })

// Express
app.use((req, resp, next) => {
  console.log(req.headers)
  next()
})

app.use('/', studentsRouter);

app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
})