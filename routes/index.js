const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log("welcome to Praxis engagement")
    res.send("Welcome to Praxis Engagement module")
});

const {
    ROUTES: {
        BASE_API
    },
    PARAMS

} = require('../src/common/constant');


router.get( BASE_API, ()=>{
    console.log("hello")
});

module.exports = router