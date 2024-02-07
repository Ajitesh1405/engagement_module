const {checkToken} = require("../controller/tokenManage")

function checkAuth (req, res, next) {
    try{
        const token=checkToken(req.cookies?.token)
        console.log(token)
    } catch(error) {
        return res.json({error})
    }
    next()
}

module.exports = {
    checkAuth
}