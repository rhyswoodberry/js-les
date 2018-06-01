const express = require('express')
const router = express.Router()

router.get('/students', (req, resp) => {
  resp.send('GET students#index')
})

router.get('/students/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
  db.query('SELECT * FROM STUDENTS WHERE id = $1', [req.params.id], (err, result) =>{
    if (err) {console.dir(err); return next() }
    console.dir(result)
    resp.json(results.rows[0])
  })
  resp.send('GET students#show(:id)')
})

router.post('/students', (req, resp) => {
  resp.send('POST students#create')
})

module.exports = router