const express = require('express');

const { createNewUser, signin, checkToken } = require("../src/controller/auth")

const router = express.Router();

router.get('/', (req, res)=>{
    console.log("welcome to Praxis engagement")
    res.send("Welcome to Praxis Engagement module")
});

const {
    ROUTES: {
        BASE_API,
        SIGNUP,
        SIGNIN,
        AUTH_TEST
    },
    PARAMS

} = require('../src/common/constant');
const { sign } = require('jsonwebtoken');


router.post(SIGNUP, createNewUser);

router.post(SIGNIN, signin);

// router.get(AUTH_TEST, checkToken, (req, res)=>{
//     return res.json({
//         msg: "Auth test was successful!"
//     })
// })

router.get(BASE_API, (req, res)=>{
    console.log("hello")
    return res.status(200).json({})
});

module.exports = router