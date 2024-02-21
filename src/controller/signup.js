const EmpMaster = require('../models/empMaster');
const jwt = require('jsonwebtoken');
const sequelize = require('../database/sequelizeConnection');
const authentication = require('../common/authentication')
const Authentication = new authentication();
const xlsx = require('xlsx');
const path = require('path');

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


// Code to migrate data from xls to databased format

// const dir = path.dirname(__dirname);   
// const file_path = path.join(dir, 'Client_master_table.xlsx')


// async function xslxToJson(file_path) {
//     const workbook = xlsx.readFile(file_path);  // Step 2
//     const workbook_sheet = workbook.SheetNames;                // Step 3
//     const workbook_response = xlsx.utils.sheet_to_json(        // Step 4
//       workbook.Sheets[workbook_sheet[2]]
//     );
//     return workbook_response
// }

// async function insertDataFromSheet() {

//     const raw_data=await xslxToJson(file_path)
//     for (key in raw_data) {
//         const data = raw_data[key]
//         console.log(data.employee_number)
        

//         await EmpMaster.create({
//             employee_number: data.employee_number,
//             first_name: data.first_name,
//             middle_name: data.middle_name,
//             last_name: data.last_name,
//             email: data.email,
//             password: data.password,
//             gender: data.gender,
//             nationality: data.nationality,
//             contact_number: data.contact_number,
//             address: data.address,
//             country: data.country,
//             // company_id: data.company_id,
//             // department_id: data.department_id,
//             // job_title: data.job_title,
//             // reporting_manager_id: data.reporting_manager_id,
//             worker_type: data.worker_type,
//             unique_id: data.unique_id,
//             status: data.status
//         }).then((result)=>console.log(result))
//     }
// }

// insertDataFromSheet()