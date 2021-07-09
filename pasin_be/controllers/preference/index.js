const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { addPreferenceQuery } = require('../../database/query')

router.post('/', async function(req, res){
    const { brand_id, size, loosey_size} = req.body;
    const user_id = 1;
    const result = await client.query(addPreferenceQuery,[user_id,brand_id,size,loosey_size]);
    res.json(
        {
            status: "success",
            data: result.rows[0]
        }
    )
})

module.exports = router