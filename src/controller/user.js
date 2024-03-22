const authentication = require('../common/authentication');
const EmpMaster = require('../models/empMaster');
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')
const sequelize = require('../database/sequelizeConnection');
const Admin = require('../models/adminTable');
const ENV_VAR = require('../common/envConfig');
const Authentication = new authentication();

exports.createUser = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const domain = await Authentication.authFunction(req);
        if(!domain){
            throw new Error("Token not found")
        }
        const empId = domain.emp_id;
        const { roleId, department, serviceLine, address, contactNumber, profilePic } = req.body;
        const empObject = {
            role_id: roleId,
            department: department,
            service_line: serviceLine,
            address: address,
            contact_number: contactNumber,
            profile_pic: profilePic || null,
            updated_by: empId,
            status: 1
        }

        await EmpMaster.update(
            empObject,
            {
                where: { emp_id: empId }
            },
            {
                transaction: t
            }
        );
        await t.commit();
        res.status(200).send({
            message: "User has been updated"
        })
    } catch (error) {
        console.log("error", error.message)
        await t.rollback();
        res.send(error.message)
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        if(!req.body){
            throw new Error("Please enter Email and Password")
        }

        const userFound = await Admin.findOne({
            where: { admin_email: emailId },
            attributes: ['admin_email', 'admin_password'],
            raw: true

        });

        if (!userFound) {
            throw new Error("User not Found")
        }
        const compare = await bcrypt.compare(password, userFound.admin_password);

        if(!compare){
            throw new Error("Either Username or Password is incorrect")
        }

        // const sqlQuery = `SELECT * FROM EmpMasters`

        // sequelize.query(sqlQuery).then((data)=> console.log(data[0][0])).catch((error)=> console.log(error.message))

        const userJwt = await Authentication.generateJwtToken(userFound.admin_email);
        res.send({
            message: "User has been logged-in",
            token: userJwt,
        })
    } catch (error) {
        console.log("error", error.message);
        res.send(error.message)
    }
}