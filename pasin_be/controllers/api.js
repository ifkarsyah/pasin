const express = require('express')
const authorize = require("../middlewares/authorization");
const router = express.Router()


router.use('/product', require('./product'))

router.use('/preference', authorize, require('./preference'))

router.get('recommendation/:productId', authorize, function(req, res){
    res.json(
        {
            status: "success",
            product_id: req.params.productId,
            reccomendation: "reserved"
        }
    )
})

router.use('/user', require('./user'))

module.exports = router