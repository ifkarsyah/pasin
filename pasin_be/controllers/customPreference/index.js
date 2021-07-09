const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { addRelBrandSizeQuery, addUserShoeSizeQuery } = require('../../database/query')

router.post('/', async function(req, res){
    const { length, loosey_size } = req.body;
    const user_id = 1;

    const query_add_bs = await client.query(addRelBrandSizeQuery,[length]);
    const rel_bs_id = query_add_bs.rows[0].bs_id;

    const result = await client.query(addUserShoeSizeQuery,[user_id,rel_bs_id,loosey_size]);

    res.json(
        {
            status: "success",
            new_rel_bs_id: result.rows[0]
        }
    )
})

module.exports = router