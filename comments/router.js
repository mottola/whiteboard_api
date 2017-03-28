const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('all comments (admin)')
})

router.route('/:id')
  .get((req, res) => {
    res.send(`view comment ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`edit comment ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`delete post ${req.params.id}`)
  })

module.exports = router