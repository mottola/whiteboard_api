require('dotenv').config()

const responseTime = require('response-time')
const statsD = require('node-statsd')
const express = require('express')
const pg = require('pg')
const cn = process.env.LOCAL_DB


const app = express()
const db = new pg.Client(cn)

db.connect()
const port = process.env.PORT || 3000
const stats = new statsD()

const users = require('./users/router')
const posts = require('./posts/router')


app.use(responseTime((req, res, time) => {
  const stat = (req.method + req.url).toLowerCase()
    .replace(/[:\.]/g, '')
    .replace(/\//g, '_')
  stats.timing(stat, time)
}))

app.use('/users', users)

app.use('/posts', posts)

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.get('/secret', (req, res) => {
  res.send('Secrets route with middleware applied')
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})
