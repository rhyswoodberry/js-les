const _ = require('lodash')
const { students, teachers } = require('./app')

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

app.get('/students', (req, resp) => {
  resp.send('GET students#index')
})

app.get('/students/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
  resp.send('GET students#show(:id)')
})

app.post('/students', (req, resp) => {
  resp.send('POST students#create')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
})