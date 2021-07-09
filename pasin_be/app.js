let express = require('express')
let app = express()

require('dotenv').config()

let client = require('./database/db')

app.listen(8000, () => {
    console.log("Backend listening on port 8000")
})