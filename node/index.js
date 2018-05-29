const _ = require('lodash')
const { students, teachers } = require('./app')

const express = require('express')
const app = express()
const port = 4000


students.forEach( student => {
  console.log(student)
})

teachers.forEach(teacher => {
  console.log(teacher)
})

// Express

app.get('/', (req, resp) => {
  resp.send('Hello from Express')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
})