const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { productsQuery, productDetailQuery, brandQuery, brandSize } = require('../../database/query')

router.get('/all', async function(req, res){
    const { limit, offset } = req.query;
    const result = await client.query(productsQuery,[limit,offset]);
    res.json(
        {
            status: "success", 
            data: result.rows
        }
    )
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const result = await client.query(productDetailQuery, [id])
    
    if (result.rowCount == 0){
        res.status(404).json(
            {
                status: "no product found",
                code: 404
            }
        )
    }else if (result.rowCount > 0){
        let size_list = []
        result.rows.forEach(element => {
            size_list.push({size: element.size, stock: element.stock})
        });
        
        product = result.rows[0]

        res.status(200).json(
            {
                id: product.id,
                name: product.name,
                price: product.price,
                photo: product.photo_url,
                size_list: size_list
            }
        )
    }
    
})

router.get('/brand/all', async function(req, res){
    const result = await client.query(brandQuery)

    res.json(
        {
            status: "success",
            data: result.rows
        }
    )
})

router.get('/brand/:id', async function(req, res){
    const id = req.params.id

    const result = await client.query(brandSize, [id])

    res.json(
        {
            status: "success",
            id: req.params.id,
            data: result.rows
        }
    )
})

module.exports = router