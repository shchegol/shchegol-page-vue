const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

express()
  // .use('/static', express.static(path.join(__dirname, 'dist/static')))
  // .use('/', express.static(path.join(__dirname, 'dist')))
  .get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
  .listen(port, () => console.log(`Listening on ${port}`))
