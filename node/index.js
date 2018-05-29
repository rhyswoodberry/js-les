const _ = require('loadash')
const { students, teachers } = require('./app')
const fs = require('fs')
const http = require('http')
const port = 4000

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

const server = http.createServer(function(req, resp) {
  console.log(req.url)
  resp.end('Hello World!')
})

server.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
})