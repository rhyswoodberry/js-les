const express = require('express')
const router = express.Router()

router.get('/', (req, resp) => {
  Student.findAll().then(results => {
    console.dir(results)
    resp.send(results)
  })
})

router.get('/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
})

router.post('/', (req, resp) => {
  console.dir(req.body)
})

module.exports = router