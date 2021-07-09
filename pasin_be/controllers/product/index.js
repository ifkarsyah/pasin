const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { getQueryObject, calculateRecommendation } = require('../../helpers/helpers')

const { 
    productsQuery, 
    productDetailQuery, 
    brandQuery, 
    brandSize, 
    productCheckQuery,
    sizeListQuery,
    userSizeQuery
} = require('../../database/query')

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
        let size_list = getQueryObject(result)
        
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


    res.status(200).json(
        {
            status: 200,
            message: "success",
            data: result.rows
        }
    )
})

router.get('/:id/recommendation', async function(req, res){
    const id = req.params.id
    
    const productCheck = await client.query(productCheckQuery, [id])

    if(productCheck.rowCount != 1){
        res.status(404).json(
            {
                status: 404,
                message: "Product not found",
                data: []
            }
        )
    }else if(productCheck.rowCount == 1){
        const result = await client.query(sizeListQuery, [id]).catch(err => console.log(err))

        let sizeLists = getQueryObject(result)

        let userSize = (await client.query(userSizeQuery, [1])).rows[0]

        let recommendation = calculateRecommendation(sizeLists, userSize)

        if (recommendation.reccomendation == 0){
            res.status(200).json({
                status: 404,
                message: "No recommendation found",
                data: [
                    recommendation
                ]
            })
        }else{
            res.status(200).json({
                status: 200,
                message: "success",
                data: [
                    recommendation
                ]
            })
        }
    }

})

module.exports = router