const express = require('express')
const router = express.Router()

router.get('/students', (req, resp) => {
})

router.get('/students/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
})

router.post('/students', (req, resp) => {
})

module.exports = router