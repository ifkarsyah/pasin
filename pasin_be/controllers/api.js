let client = require('../database/db')
let express = require('express')
let router = express.Router()

router.get('/products', async function(req, res){
    const { limit, offset } = req.query;
    const sql = "select * from products LIMIT $1 OFFSET $2"
    const result = await client.query(sql,[limit,offset]);
    res.json(
        {
            status: "success", 
            data: result.rows
        }
    )
})

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

router.post('/addPreference', async function(req, res){
    const { brand_id, size, loosey_size} = req.body;
    const user_id = 1;
    const sql = "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1,(SELECT bs_id from rel_brand_size where brand_id =$2 AND size=$3),$4) returning *"
    const result = await client.query(sql,[user_id,brand_id,size,loosey_size]);
    res.json(
        {
            status: "success",
            data: result.rows[0]
        }
    )
})

router.post('/addCustomPreference', async function(req, res){
    const { length, loosey_size } = req.body;
    const user_id = 1;

    const sql_add_bs = "INSERT into  rel_brand_size(length) VALUES ($1) returning *"
    const query_add_bs = await client.query(sql_add_bs,[length]);
    const rel_bs_id = query_add_bs.rows[0].bs_id;

    const sql_add_uss = "INSERT into rel_user_shoe_size(user_id, rel_bs_id, loosey_size) VALUES ($1, $2, $3) returning *"
    const result = await client.query(sql_add_uss,[user_id,rel_bs_id,loosey_size]);

    res.json(
        {
            status: "success",
            new_rel_bs_id: result.rows[0]
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

router.get('/user', async function(req, res){
    const username = 'audrey'
    const sql = "select username, born_date, gender from accounts where username = $1"
    const result = await client.query(sql,[username]);
    res.json(
        {
            status: "success",
            data: [result.rows[0]]
        }
    )
})

module.exports = router