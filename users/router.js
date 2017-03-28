const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');


// middleware for user router
// router.use - see Express docs

router.route('/')
  .get((req, res) => {
    res.send('users homepage')
  })
  .post((req, res) => {
    res.send('add new user')
  })

router.route('/:id')
  .get((req, res) => {
    res.send(`GET user ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`PUT user ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`DELETE user ${req.params.id}`)
  })

router.route('/:id/profile')
  .get((req, res) => {
    res.send('get user profile')
  })
  .put((req, res) => {
    res.send('update user profile idempotently')
  })

router.get('/users/:id/posts/', (req, res) => {
  res.send('User posts')
})

router.route('/users/:id/posts/:id')
  .get((req, res) => {
    res.send('get a user\'s post')
  })
  .post((req, res) => {
    res.send('create a post')
  })
  .put((req, res) => {
    res.send('udpate a post')
  })
  .delete((req, res) => {
    res.send('delete a post')
  })

module.exports = router