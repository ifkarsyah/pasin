let express = require('express')
let app = express()

require('dotenv').config()

let client = require('./database/db')

app.use(require('./controllers'))

app.listen(8000, () => {
    console.log("Backend listening on port 8000")
})