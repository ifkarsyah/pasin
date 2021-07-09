let express = require('express')
let router = express.Router()

router.use('/login', require('./login'))

router.use('/product', require('./product'))

router.use('/preference', require('./preference'))

router.get('recommendation/:productId', function(req, res){
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