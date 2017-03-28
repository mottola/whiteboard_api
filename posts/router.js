const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('posts homepage')
})

router.get('/:id', (req, res) => {
  res.send(`view read-only post ${req.params.id}`)
})

router.get('/:id/comments', (req, res) => {
  res.send(`view comments for post ${req.params.id}`)
})

router.post('/:id/comments', (req, res) => {
  res.send(`Add comment to post ${req.params.id}`)
})

module.exports = router