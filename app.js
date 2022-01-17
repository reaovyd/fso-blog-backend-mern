const router = require('./controllers/route')
const express = require('express')
const app = express()
const middleware = require('./utils/middleware')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')

logger.info('Connecting to MongoDB')

mongoose.connect(config.MONGODB_URI).then(res => {
    logger.info('Connected to MongoDB!')
}).catch(err => {
    logger.error('Error connecting to MongoDB! ERR_MSG: ', err.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/blogs', router)

app.use(middleware.unknownEndpointHandler)
app.use(middleware.errorHandler)

module.exports = app
