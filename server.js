const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer()
const port = process.env.PORT || 5000
const createApp = require('./src/app')

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Страница не найдена')
        } else {
          res.status(500).end('Внутренняя ошибка сервера')
        }
      } else {
        res.end(html)
      }
    })
  })
})

server.listen(port)

// server
//   .use('/static', express.static(path.join(__dirname, 'dist/static')))
//   .use('/', express.static(path.join(__dirname, 'dist')))
//   .use((err, req, res, next) => {
//     res.end('Error: ' + err.message);
//   })
//   .get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'))
//   })
//   .listen(port, () => console.log(`Listening on ${port}`))
