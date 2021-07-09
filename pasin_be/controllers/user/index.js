const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { userQuery } = require('../../database/query')

router.get('/', async function(req, res){
    const username = 'audrey'
    const result = await client.query(userQuery,[username]);
    res.status(200).json(
        {
            status: 200,
            message: "Success",
            data: [result.rows[0]]
        }
    )
})

module.exports = router