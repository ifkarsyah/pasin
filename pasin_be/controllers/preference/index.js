const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { addPreferenceQuery, addRelBrandSizeQuery, addUserShoeSizeQuery, profileUserSizeQuery } = require('../../database/query')

router.post('/addPreference', async function(req, res){
    const { brand_id, size, loosey_size} = req.body;
    const user_id = req.user.id;

    try{
        const result = await client.query(addPreferenceQuery,[user_id,brand_id,size,loosey_size]);
        res.json(
            {
                status: 201,
                message: "created",
                data: result.rows[0]
            }
        )
    }catch(error){
        res.status(500).json(
            {
                status: 500,
                message: error.message,
                data: []
            }
        )
    }
})

router.post('/addCustomPreference', async function(req, res){
    const { length, loosey_size } = req.body;
    const user_id = req.user.id;

    try{
        const query_add_bs = await client.query(addRelBrandSizeQuery,[length]);
        const rel_bs_id = query_add_bs.rows[0].bs_id;

        const result = await client.query(addUserShoeSizeQuery,[user_id,rel_bs_id,loosey_size]);

        res.status(200).json(
            {
                status: 201,
                message: "created",
                data: [result.rows[0]]
            }
        )
    }catch(error){
        res.status(500).json(
            {
                status: 500,
                message: error.message,
                data: []
            }
        )
    }
})

router.get('/all', async function(req, res){
    const user_id = req.user.id

    try{
        const resultProfileUserSize = client.query(profileUserSizeQuery, [id])
        const profileUserSize = (await resultProfileUserSize).rows[0]

        const resultBrand = client.query(brandQuery, [profileUserSize])
        delete profileUserSize.brand_id

        console.log(profileUserSize)

    }catch(error){
        res.status(500).json(
            {
                status: 500,
                message: error.message,
                data: []
            }
        )
    }
})

module.exports = router