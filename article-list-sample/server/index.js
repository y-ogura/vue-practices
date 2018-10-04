
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const articles = [
  {
    'id': 1,
    'title': 'first article',
    'content': 'write first article.'
  },
  {
    'id': 2,
    'title': 'today\'s dinner',
    'content': 'today\'s dinner is humberg.'
  },
  {
    'id': 3,
    'title': 'I like ...',
    'content': 'I like watch japanese anime.'
  }
]

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.get('/api/articles', function(req, res, next) {
    return res.json(articles)
  })

  app.get('/api/articles/:id', function(req, res, next) {
    const id = req.params.id
    return res.json(articles[id - 1])
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
