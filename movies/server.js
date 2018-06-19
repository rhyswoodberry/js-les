const express = require('express')

const server = express()

server.get('/test', (req, resp) => {
  resp.send('OK!')
})