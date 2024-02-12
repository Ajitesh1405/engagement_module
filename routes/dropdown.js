const express = require('express');
const {
    getAllCurrency, 
    getAllBillingFreq,
    getAllOpe,
    getAllTax
} = require("../src/controller/dropdown")

const {
    ROUTES: {
        CURRENCY_DROPDOWN_URL,
        BILLING_DROPDOWN_URL,
        OPE_DROPDOWN_URL,
        TAX_DROPDOWN_URL
    },
    PARAMS

} = require('../src/common/constant');

const dropDownRouter = express.Router();

dropDownRouter.get(CURRENCY_DROPDOWN_URL, getAllCurrency)
dropDownRouter.get(BILLING_DROPDOWN_URL, getAllBillingFreq)
dropDownRouter.get(OPE_DROPDOWN_URL, getAllOpe)
dropDownRouter.get(TAX_DROPDOWN_URL, getAllTax)

module.exports = dropDownRouter