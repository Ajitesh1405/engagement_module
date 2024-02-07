const EmpMaster = require("../models/empMaster")
const ENV_VAR = require('../common/Config');
const {checkToken} = require("./tokenManage")

async function updateUserDetails(req, res) {
    token = checkToken(req.cookies?.token)
    emp_id = token.dataValues.emp_id
    const queryResult = await EmpMaster.findAll({
        where: {
            emp_id: emp_id,
        }
    })

    emp = queryResult[0]
    emp.role_id = req.body.role_id
    emp.department = req.body.department
    emp.service_line = req.body.service_line
    emp.address = req.body.address
    emp.contact_number = req.body.contact_number
    emp.email = req.body.email
    emp.profile_pic = req.body.profile_pic
    emp.status = req.body.status
    const someRes = await emp.save()
    

    return res.json({queryRes: someRes})
}

module.exports = {
    updateUserDetails
}