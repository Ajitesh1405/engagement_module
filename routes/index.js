const express = require('express');
const router = express.Router();


const SignupController = require('../src/controller/signup');
// const MiddleWare = require('../src/middlewares/currentUser');
const User = require('../src/controller/user');
const ClientDetails = require('../src/controller/clientDetails');
const Billing = require('../src/controller/billing');
const Engagement = require('../src/controller/engagement');
const { authFunction } = require('../src/middlewares/authorization')

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
        ENGAGEMENT_EMPLOYEE_NAME,
        BILLING_EXPENSES,
        BILLING_TEMPLATES,
        CREATE_ENGAGEMENT
    },
    PARAMS

} = require('../src/common/constant');


router.get( BASE_API, ()=>{
    console.log("hello")
});

router.post(BASE_API + SIGN_UP, SignupController.signUp);

// router.get(BASE_API +"/current", MiddleWare.currentUser);

router.put(BASE_API + CREATE_USER, User.createUser);

router.post(BASE_API + USER_LOGIN,  User.userLogin);

router.get(BASE_API + CLIENT_DETAILS,  ClientDetails.clientMaster);

router.get(BASE_API + BILLING_ENTITY_DETAILS, Billing.billingEntityDetails);

router.get(BASE_API + BILLING_SERVICES_DETAILS, Billing.billableServicesDetails);

router.get(BASE_API + ENGAGEMENT_EMPLOYEE_NAME, Engagement.engagementTeam);

router.get(BASE_API + BILLING_EXPENSES, Billing.expenses)

router.get(BASE_API + BILLING_TEMPLATES, authFunction, Billing.billingTemplates)

router.post(BASE_API + CREATE_ENGAGEMENT, Engagement.createEngagement)

// router.get(BASE_API + PERSON_INCHARGE_DETAILS, BillingEntityDetails.personInChargeDetails)

module.exports = router