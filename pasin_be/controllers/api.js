const express = require('express')
const authorize = require("../middlewares/authorization");
const router = express.Router()


router.use('/product', require('./product'))

router.use('/preference', authorize, require('./preference'))

router.use('/user', require('./user'))

module.exports = router