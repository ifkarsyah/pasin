let express = require('express')
let router = express.Router()

router.use('/login', require('./login'))
router.use('/product', require('./product'))

router.get('/products', function(req, res){
    res.json(
        {
            status: "success", 
            data: ["reserved"]
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

router.post('addPreference', function(req, res){
    res.json(
        {
            status: "success",
            new_rel_bs_id: 1
        }
    )
})

router.post('addCustomPreference', function(req, res){
    res.json(
        {
            status: "success",
            new_rel_bs_id: 1
        }
    )
})

router.get('recommendation/:productId', function(req, res){
    res.json(
        {
            status: "success",
            product_id: req.params.productId,
            reccomendation: "reserved"
        }
    )
})

router.get('user', function(req, res){
    res.json(
        {
            status: "success",
            data: ["reserved"]
        }
    )
})

module.exports = router