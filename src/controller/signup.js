const EmpMaster = require('../models/empMaster');
const jwt = require('jsonwebtoken');
const sequelize = require('../database/sequelizeConnection');
const authentication = require('../common/authentication')
const Authentication = new authentication();

exports.signUp = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const { email, firstName, password } = req.body;
        const requiredFields = ['email', 'firstName', 'password'];

        requiredFields.forEach(field => {
            if (!req.body[field]) {
                throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        });

        const user = await EmpMaster.findOne({
            where: { email: req.body.email },
            raw: true
        });

        if (user) {
            throw new Error("Email already in use")
        };

        const employee = await EmpMaster.create({
            email: email,
            first_name: firstName,
            password: password
        },
        {
            transaction: t
        },
        {
            raw: true
        }
        );
        const empDetails = employee.dataValues

        // Generate JWT token
        const userJwt = await Authentication.generateJwtToken(empDetails);
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