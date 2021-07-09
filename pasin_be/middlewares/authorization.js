const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(req, res, next) {
  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1];
  
  // Check if not token
  if (!token) {
    return res.status(403).json(
            { 
                status: 403,
                message: "Authorization denied",
                data: []
            }
        );
  }

  // Verify token
  try {
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json(
        { 
            status: 401,
            message: "Token is not valid",
            data:[]
        }  
    );
  }
};