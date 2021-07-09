let express = require('express')
let router = express.Router()

router.use('/login', require('./login'))
router.use('/products', require('./products'))

router.get('/product/:id', function(req, res){
    res.json(
        {
            status: "success",
            id: req.params.id, 
            data: "reserved"
        }
    )
})

router.get('/brands', function(req, res){
    res.json(
        {
            status: "success",
            data: ["reserved"]
        }
    )
})

router.get('/brand/:id', function(req, res){
    res.json(
        {
            status: "success",
            id: req.params.id,
            data: ["reserved"]
        }
    )
})

router.use('/addPreference', require('./preference'))

router.use('/addCustomPreference', require('./customPreference'))

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