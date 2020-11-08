const express = require('express'),
      cors    = require('cors'),
      morgan  = require('morgan'),
	    bodyParser = require('body-parser')

const { apiRouter } = require('./router/ApiRouter')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', apiRouter)

/**
 * Future routes
 * /blog
 * /static
 * /cart
 * /user
 * /products
 * */

module.exports = app
