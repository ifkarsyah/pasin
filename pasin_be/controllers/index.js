let express = require('express')
let router = express.Router()

router.use('/api', require('./api'))

router.get('/', function (req, res) {
    res.json({status: "success", code: 200})
})

module.exports = router