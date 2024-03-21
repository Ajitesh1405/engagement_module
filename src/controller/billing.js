const CompanyMaster = require('../models/companyMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const sequelize = require('../database/sequelizeConnection');
const DBQueries = require('../database/dbQueries');
const Sequelize = require('sequelize');
const BillingMilestone = require('../models/billingMilestone');
const Currency = require('../models/currency');
const BillingFrequency = require('../models/billingFrequency');
const utility = new Utility();

exports.billingEntityDetails = async (req, res) => {
    try {
        if (req.query.company_id) {
            // this procedure will give employees in the selected companies
            const CompanyId = req.query.company_id;
            const result = await sequelize.query(`EXEC get_company_and_employee_detail_list @CompanyId = :CompanyId`, {
                replacements: { CompanyId: CompanyId },
                type: Sequelize.QueryTypes.SELECT,
                raw: true
            });
            const response = await utility.sendResponse(result, STATUS_CODE.SUCCESS)
            return res.send(response)
        }

        const entityDetails = await CompanyMaster.findAll({
            attributes: ['company_id', 'company_name', 'branch_name'],
            raw: true
        })
        if (!entityDetails) {
            throw new Error("Company Details not found");
        }
        const billingEntityDetails = entityDetails.map((entity) => {
            return {
                id: entity.company_id,
                company_name: entity.company_name,
                branch_name: entity.branch_name

            }
        })
        const response = await utility.sendResponse(billingEntityDetails, STATUS_CODE.SUCCESS)
        res.send(response);

    } catch (error) {
        console.log("error", error.message);
        const response = await utility.errorResponse(ERROR_MESSAGE.COMPANY_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}

exports.billableServicesDetails = async (req, res) => {
    try {
        if (!req.query.company_id) {
            throw new Error("Please provide company details")
        }

        CompanyId = req.query.company_id

        const result = await sequelize.query('EXEC get_billable_services_of_billing_entity @CompanyId = :CompanyId', {
            replacements: { CompanyId: CompanyId },
            type: Sequelize.QueryTypes.SELECT,
            raw: true
        })

        const response = await utility.sendResponse(result, STATUS_CODE.SUCCESS);

        res.send(response)

    } catch (error) {
        console.log("error", error.message);
        const response = await utility.errorResponse(ERROR_MESSAGE.COMPANY_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}

exports.expenses = async (req, res)=>{
    try {

        // code for admin expense
        if(req.query.option == 'admin'){
            res.send({})

        }
        
        // code for operational expense
        else if(req.query.option == 'operational'){
            res.send({})
        }

        // code for billing milestone
        else{
            const billingMilestone = await BillingMilestone.findAll({
                attributes: ['milestone_id', 'billing_milestone', 'deliverables'],
                raw: true
            });

            const response = await utility.sendResponse(billingMilestone, STATUS_CODE.SUCCESS);

            res.send(response);

        }


    } catch (error) {
        console.log("error", error.message);
        const response = await utility.errorResponse(ERROR_MESSAGE.EXPENSE_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}

exports.billingTemplates = async(req, res) =>{
    try {
        
        if(req.query.option == 'currency'){
            const currency = await Currency.findAll({
                attributes: ['currency_id', 'currency_name'],
                raw: true
            });

            console.log("currency", currency)

            const response = await utility.sendResponse(currency, STATUS_CODE.SUCCESS)
            res.send(response)
        }
        
        else{
            const billingFrequency = await BillingFrequency.findAll({
                attributes: ['frequency_name', 'frequency_occurence'],
                raw: true
            });

            console.log("billingFrequency",billingFrequency)

            const response = await utility.sendResponse(billingFrequency, STATUS_CODE.SUCCESS);
            res.send(response)
        }

    } catch (error) {
        console.log("error", error.message);
        const response = await utility.errorResponse(ERROR_MESSAGE.BILLING_TEMPLATE, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}