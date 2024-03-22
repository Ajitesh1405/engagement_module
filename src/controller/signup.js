const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sequelize = require('../database/sequelizeConnection');
const authentication = require('../common/authentication')
const EmpMaster = require('../models/empMaster')
const Admin = require('../models/adminTable');
const error = require('express-upload/lib/error');
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

        if (!user) {
            throw new Error("User is not an employee")
        };

        const admin = await Admin.findOne({
            where : { admin_email: email }
        })

        if(admin){
            throw new Error('Already a user')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const adminDetails = await Admin.create({
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
    
        const adminObject = adminDetails.dataValues?.admin_email;

        // Generate JWT token
        const userJwt = await Authentication.generateJwtToken(adminObject);
        console.log("token", userJwt)

        await t.commit();
        res.status(201).send({
            message: "User has been created",
            token: userJwt
        })

    } catch (error) {
        console.log("error", error.message)
        await t.rollback();
        res.send(error.message)
    }
}


