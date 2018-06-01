const express = require('express')
const router = express.Router()

router.get('/students', (req, resp) => {
  resp.send('/GET')
})

router.get('/students/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
})

router.post('/students', (req, resp) => {
  console.dir(req.body)
})

module.exports = router