const Currency = require("../models/currency")
const BillingFrequency = require("../models/billingFrequency")
const OperationalExpenses = require("../models/operationalExpenses")
const Tax = require("../models/tax")

async function getAllCurrency(req, res) {
    const queryResult = await Currency.findAll()
    response = {}
    for (curr of queryResult) {
        const {currency_id, ...restOfData} = curr
        response[currency_id] = {
            ...restOfData
        }
    }
    return res.json(response)
}


async function getAllBillingFreq(req, res) {
    const queryResult = await BillingFrequency.findAll()
    response = {}
    for (billingFrequency of queryResult) {
        const {frequency_id, ...restOfData} = billingFrequency
        response[frequency_id] = {
            ...restOfData
        }
    }
    return res.json(response)
}


async function getAllOpe(req, res) {
    const queryResult = await OperationalExpenses.findAll()
    response = {}
    for (ope of queryResult) {
        const {ope_id, ...restOfData} = ope
        response[ope_id] = {
            ...restOfData
        }
    }
    return res.json(response)
}


async function getAllTax(req, res) {
    const queryResult = await Tax.findAll()
    response = {}
    for (tax of queryResult) {
        const {tax_id, ...restOfData} = tax
        response[tax_id] = {
            ...restOfData
        }
    }
    return res.json(response)
}


module.exports = {
    getAllCurrency,
    getAllBillingFreq,
    getAllOpe,
    getAllTax
}