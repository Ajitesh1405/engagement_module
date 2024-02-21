const ClientMaster  = require('../models/clientMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const utility = new Utility();

exports.clientMaster = async (req, res)=>{
    try {
        const clientDetails = await ClientMaster.findAll({
            attributes: ['client_id', 'client_name']
        },
            {
            raw: true
        });
        const clientObject = clientDetails.map((client) => {
            return {
                id: client.client_id,
                name: client.client_name
                            }
        })
        const response = await utility.sendResponse(clientObject, STATUS_CODE.SUCCESS )

        res.send(response)
    } catch (error) {
        console.log("error", error.message)
        const response = await utility.errorResponse(ERROR_MESSAGE.CLIENT_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(response)
    }
}