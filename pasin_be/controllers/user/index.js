const express = require('express')
const router = express.Router()
const client = require('../../database/db')
const { userQuery, searchUserQuery, newUserQuery } = require('../../database/query')
const { jwtTokenGenerator } = require("../../helpers/jwtToken");
const bcrypt = require('bcrypt');
const authorize = require("../../middlewares/authorization");

router.get('/', authorize, async function(req, res){
    const user_id = req.user.id;
    try{
        const result = await client.query(userQuery,[user_id]);
        res.json(
            {   
                status: 200,
                message: "success",
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
        );
    }
})

router.post('/login', async (req, res) => {
    let data = req.body

    if (data.username === undefined && !data.password === undefined){
        return res.status(401).json(
            {
                status: 401,
                message: "Parameters not specified",
                data:[]
            }
        )
    }

    let result = await client.query(searchUserQuery, [data.username])

    if (result.rowCount == 0) {
        return res.status(401).json(
            {
                status: 401,
                message: "User not found",
                data:[]
            }
        )
    } else if (result.rowCount == 1) {
        userDb = await result.rows[0]

        bcrypt.compare(data.password, userDb.password, function (err, result){
            if (result) {
                delete userDb.password
                const jwtToken = jwtTokenGenerator(userDb.user_id);
                res.status(200).json(
                    {
                        status: 200,
                        message: "logged in successfully",
                        data:[
                            {
                                user: userDb,
                                token: jwtToken
                            }
                        ]
                    }
                )
            }else{
                return res.status(401).json(
                    {
                        status: 401,
                        message: "Wrong user password",
                        data:[]
                    }
                )
            }
        })
    }
})

router.post('/logout', authorize, async (req, res) => {
    res.status(200).json(
        {
            status: 200,
            message: "logged out successfully",
            data:[]
        }
    );
})

router.post('/register', async (req, res) => {
    const { username, born_date, password, gender } = req.body;

    try {
        const user = await client.query(searchUserQuery, [username]);

        if (user.rows.length > 0) {
            return res.status(401).json(
                {
                    status: 401,
                    message: "User already exist!",
                    data:[]
                }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);
        console.log(bcryptPassword);

        const newUser = await client.query(newUserQuery, [username, bcryptPassword, born_date, gender]);
        userDb = await newUser.rows[0]

        delete userDb.password

        res.status(200).json(
            {
                status: 200,
                message: "registered successfully",
                data: userDb
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                status: 500,
                message: error.message,
                data: []
            }
        );
    }
   
})

module.exports = router