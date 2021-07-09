const express = require('express')
const authorize = require("../middlewares/authorization");
const router = express.Router()


router.use('/product', require('./product'))

router.get('/brands', authorize, function(req, res){
    res.json(
        {
            status: "success",
            data: ["reserved"]
        }
    )
})

router.get('/brand/:id', authorize, function(req, res){
    res.json(
        {
            status: "success",
            id: req.params.id,
            data: ["reserved"]
        }
    )
})

router.use('/addPreference', authorize, require('./preference'))

router.use('/addCustomPreference', authorize, require('./customPreference'))

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