const app = require('./app')
const config = require('./config/config')

app.listen(config.port, () => console.log(`Started on ${config.port}`))
