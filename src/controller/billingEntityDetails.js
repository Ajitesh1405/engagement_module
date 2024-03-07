const CompanyMaster = require('../models/companyMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const sequelize = require('../database/sequelizeConnection');
const DBQueries = require('../database/dbQueries');
const Sequelize = require('sequelize');
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