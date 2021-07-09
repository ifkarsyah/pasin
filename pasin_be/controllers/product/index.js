const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { productDetailQuery } = require('../../database/query')

router.get('/:id', async (req, res) => {
    let id = req.params.id

    // if (data.username === undefined && !data.password === undefined){
    //     return res.status(401).json(
    //         {
    //             status: "Parameters not specified",
    //             code: 401
    //         }
    //     )
    // }

    let result = await client.query(productDetailQuery, [id])
    
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

module.exports = router