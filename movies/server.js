const express = require('express')

const server = express()

server.get('/movies', (req, resp) => {
  resp.json([])
})

server.get('/test', (req, resp) => {
  resp.send('OK!')
})

server.listen(3000)