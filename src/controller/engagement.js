const EmpMaster = require('../models/empMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const SkillTags = require('../models/skillTags');
const sequelize = require('../database/sequelizeConnection');
const DBQueries = require('../database/dbQueries');
const utility = new Utility();

exports.engagementTeam = async (req, res)=>{
    try {
        const employees = await sequelize.query(
            DBQueries.GET_ENGAGEMENT_EMPOYEES(),
            {
                type: sequelize.QueryTypes.SELECT,
                nest: true
            }
        );
        
        const response = await utility.sendResponse(employees, STATUS_CODE.SUCCESS);

        res.send(response)
    } catch (error) {
        console.log("error", error.message)
        // const response = await utility.errorResponse(ERROR_MESSAGE.CLIENT_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(error.message)
    }
}