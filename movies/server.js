const express = require('express')

const server = express()

server.get('/movies', (req, resp) => {
  Movie.find({}).then(movies => {
    console.log(movies)
    resp.json(movies)
  })
})

server.get('/test', (req, resp) => {
  resp.send('OK!')
})

server.listen(3000)