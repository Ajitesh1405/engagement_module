const EmpMaster = require("../models/empMaster")
const ENV_VAR = require('../common/Config');
const {createToken} = require("./tokenManage")

async function createNewUser(req, res) {
    const body = req.body

    const queryResult = await EmpMaster.findAll({
        where: {
            email: body.email,
        }
    })

    if (queryResult.length!=0) {
        return res.json({
            error: "There is already an user with that email."
        })
    }

    const result = await EmpMaster.create({
        first_name: body.first_name,
        last_name: body.last_name,
        password: body.password,
        email: body.email,
    }).then((result)=>{
        return res.status(201).json({msg: "Entry created successfully."})
    })
    .catch((err)=>{
        console.log("Error while creating entry: ",err)
        return res.status(400).json({error: err})
    })
}

async function signin(req, res) {
    // Fetch content from request
    const body = req.body
    const email = body.email
    const password = body.password

    const queryResult = await EmpMaster.findAll({
        where: {
            email: email,
            password: password
        }
    })

    if (queryResult.length == 0) {
        return res.status(400).json({
            error: "Invalid username or passoword"
        })
    }
    const token = createToken(queryResult[0])
    res.cookie("token", token)

    return res.json({
        msg: "Login Successful!"
    })
}

module.exports = {
    createNewUser,
    signin,
}