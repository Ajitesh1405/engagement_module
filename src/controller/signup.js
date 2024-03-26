const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sequelize = require('../database/sequelizeConnection');
const authentication = require('../common/authentication')
const EmpMaster = require('../models/empMaster')
const Admin = require('../models/adminTable');
const error = require('express-upload/lib/error');
const { runInThisContext } = require('vm');
const Authentication = new authentication();

exports.signUp = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const { email, password } = req.body;
        const requiredFields = ['email', 'password'];

        requiredFields.forEach(field => {
            if (!req.body[field]) {
                throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        });

        const user = await EmpMaster.findOne({
            where: { email: email },
            raw: true
        });

        console.log("users11", user.dataValues)

        if (!user) {
            throw new Error("User is not an employee")
        };

        const admin = await Admin.findOne({
            where : { admin_email: email }
        })
  
        let adminDetails;
        if(!admin){
            const hashedPassword = await bcrypt.hash(password, 10);

            adminDetails = await Admin.create({
                admin_email: req.body.email,
                admin_password: hashedPassword
            },
            {
                transaction: t
            },
            {
                raw: true
            }
            );
        }
        else{
            throw new Error("Already a user")
        }

        const empObject = await EmpMaster.findOne({
            attributes : ["employee_number", "first_name", "middle_name", "last_name"],
            where : {email: email },
            raw: true
        })
        console.log("employee", empObject)

        let fullName = empObject.first_name;
        if (empObject.middle_name) {
         fullName += ' ' + empObject.middle_name;
        }
        fullName += ' ' + empObject.last_name;
        
        const adminObject = adminDetails.dataValues?.admin_email;

        // Generate JWT token
        const userJwt = await Authentication.generateJwtToken(adminObject);
        console.log("token", userJwt)

        await t.commit();
        res.status(201).send({
            message: "User has been created",
            user: fullName,
            token: userJwt
        })

    } catch (error) {
        console.log("error", error.message)
        await t.rollback();
        res.status(400).send(error.message)
    }
}


