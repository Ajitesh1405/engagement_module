const CompanyMaster = require('../models/companyMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const utility = new Utility();

exports.billingEntityDetails = async (req, res) => {
    try {
        const entityDetails = CompanyMaster.findAll({
            attributes: ['company_id', 'company_name', 'branch', 'billing_service']
        })
        if (!entityDetails) {
            throw new Error("Company Details not found");
        }
        res.staus(STATUS_CODE.SUCCESS).send(entityDetails);

    } catch (error) {
        console.log("error", error.message)
        const response = await utility.errorResponse(ERROR_MESSAGE.COMPANY_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}