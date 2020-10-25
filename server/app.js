const express = require('express'),
      cors    = require('cors'),
      morgan  = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('dev'))

module.exports = app
