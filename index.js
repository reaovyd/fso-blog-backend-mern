const http = require('http')
const logger = require('./utils/logger')
const app = require('./app') 
const config = require('./utils/config')

const PORT = config.PORT

const server = http.createServer(app)
server.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`)
})

