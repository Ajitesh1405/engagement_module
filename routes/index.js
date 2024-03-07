const express = require('express');
const router = express.Router();


const SignupController = require('../src/controller/signup');
// const MiddleWare = require('../src/middlewares/currentUser');
const User = require('../src/controller/user');
const ClientDetails = require('../src/controller/clientDetails');
const BillingEntityDetails = require('../src/controller/billingEntityDetails');

// static route
router.get('/', (req, res)=>{
    console.log("welcome to Praxis engagement")
    res.send("Welcome to Praxis Engagement module")
});

const {
    ROUTES: {
        BASE_API,
        SIGN_UP,
        CREATE_USER,
        USER_LOGIN,
        CLIENT_DETAILS,
        BILLING_ENTITY_DETAILS,
        BILLIN_SERVICES_DETAILS
    },
    PARAMS

} = require('../src/common/constant');


router.get( BASE_API, ()=>{
    console.log("hello")
});

router.post(BASE_API + SIGN_UP, SignupController.signUp);

// router.get(BASE_API +"/current", MiddleWare.currentUser);

router.put(BASE_API + CREATE_USER, User.createUser);

router.get(BASE_API + USER_LOGIN, User.userLogin);

router.get(BASE_API + CLIENT_DETAILS, ClientDetails.clientMaster);

router.get(BASE_API + BILLING_ENTITY_DETAILS,  BillingEntityDetails.billingEntityDetails);

router.get(BASE_API + BILLIN_SERVICES_DETAILS, BillingEntityDetails.billableServicesDetails)

// router.get(BASE_API + PERSON_INCHARGE_DETAILS, BillingEntityDetails.personInChargeDetails)

module.exports = router