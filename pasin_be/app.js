let express = require('express')
let app = express()
let cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

let client = require('./database/db')
app.use(express.json())
app.use(require('./controllers'))

app.listen(8000, () => {
    console.log("Backend listening on port 8000")
})