const jwt = require("jsonwebtoken")
const ENV_VAR = require('../common/Config');

function createToken(user) {
    return jwt.sign({
        ...user
    }, ENV_VAR.JWT_SECRET_KEY)
}

function checkToken(token) {
    return jwt.verify(token, ENV_VAR.JWT_SECRET_KEY)
}

module.exports = {
    createToken,
    checkToken
}