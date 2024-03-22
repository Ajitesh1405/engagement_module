const jwt = require('jsonwebtoken');
const ENV_VAR  = require('../common/envConfig')

exports.authFunction = (req, res, next) => {
    try {
        const auth_token = req.headers?.authorization || req.headers?.Authorization;
        console.log("token", auth_token);
        if (!auth_token) {
           throw new Error("User is not authenticated")
        }
    
        const payload = jwt.verify(
            auth_token,
            ENV_VAR.JWTKey
        );
        req.currentUser = payload;
        next()
    } catch (error) {
        console.log("error")
        res.send({
            error: error.message
        })
    }

    
}
