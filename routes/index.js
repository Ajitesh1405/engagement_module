const express = require('express');
const router = express.Router();


const SignupController = require('../src/controller/signup');
// const MiddleWare = require('../src/middlewares/currentUser');
const User = require('../src/controller/user');
const ClientDetails = require('../src/controller/clientDetails');
const BillingEntityDetails = require('../src/controller/billingEntityDetails');
const Engagement = require('../src/controller/engagement');

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
        BILLING_SERVICES_DETAILS,
        ENGAGEMENT_EMPLOYEE_NAME
    },
    PARAMS

} = require('../src/common/constant');


router.get( BASE_API, ()=>{
    console.log("hello")
});

router.post(BASE_API + SIGN_UP, SignupController.signUp);

// router.get(BASE_API +"/current", MiddleWare.currentUser);

router.put(CREATE_USER, User.createUser);

router.get(USER_LOGIN, User.userLogin);

router.get(CLIENT_DETAILS, ClientDetails.clientMaster);

router.get(BILLING_ENTITY_DETAILS,  BillingEntityDetails.billingEntityDetails);

router.get(BILLING_SERVICES_DETAILS, BillingEntityDetails.billableServicesDetails);

router.get(ENGAGEMENT_EMPLOYEE_NAME,  Engagement.engagementTeam);

// router.get(BASE_API + PERSON_INCHARGE_DETAILS, BillingEntityDetails.personInChargeDetails)

module.exports = router