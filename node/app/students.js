var express = require('express')
var router = express.Router()

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

module.exports = router