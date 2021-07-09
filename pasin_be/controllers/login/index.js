const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const loginQuery = require('../../database/query')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    let data = req.body

    if (data.username === undefined && !data.password === undefined){
        return res.status(401).json(
            {
                status: "Parameters not specified",
                code: 401
            }
        )
    }

    let result = await client.query({
        text: loginQuery,
        values: [req.params.username]
    })

    if (result.rows == 0) {
        return res.status(401).json(
            {
                status: "User not found",
                code: 401
            }
        )
    }else if (result.rows == 1) {
        //method
    }
})

module.exports = router