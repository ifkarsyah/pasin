const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { loginQuery } = require('../../database/query')
const bcrypt = require('bcrypt');

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

    let result = await client.query(loginQuery, [data.username])

    if (result.rowCount == 0) {
        return res.status(401).json(
            {
                status: "User not found",
                code: 401
            }
        )
    } else if (result.rowCount == 1) {
        userDb = await result.rows[0]

        bcrypt.compare(data.password, userDb.password, function (err, result){
            if (result) {
                delete userDb.password
                res.status(200).json(userDb)
            }else{
                return res.status(401).json(
                    {
                        status: "Wrong user password",
                        code: 401
                    }
                )
            }
        })
    }
})

module.exports = router