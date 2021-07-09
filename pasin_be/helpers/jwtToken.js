const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtTokenGenerator(user_id) {
    const payload = {
      user: {
        id: user_id
      }
    };
    
    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "24h" });
}

module.exports = { jwtTokenGenerator };