const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { productsQuery } = require('../../database/query')


router.get('/', async function(req, res){
    const { limit, offset } = req.query;
    const result = await client.query(productsQuery,[limit,offset]);
    res.json(
        {
            status: "success", 
            data: result.rows
        }
    )
})

module.exports = router