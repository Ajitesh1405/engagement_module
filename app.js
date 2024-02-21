const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const ENV_VAR = require('./src/common/envConfig');
const app = express();
const PORT = ENV_VAR.PORT || 3000;
const cookieParser = require('cookie-parser');
const sequelize = require('./src/database/sequelizeConnection');
const fs = require('fs');
const path = require('path');
const BillingFrequency = require('./src/models/billingFrequency');
const BillingMaster = require('./src/models/billingMaster');
const ClientCompanyDetails = require('./src/models/clientCompDetails');
const ClientMaster = require('./src/models/clientMaster');
const CompanyMaster = require('./src/models/companyMaster');
const Currency = require('./src/models/currency');
const EmpMaster = require('./src/models/empMaster');
const EngMaster = require('./src/models/engMaster');
const EngRoles = require('./src/models/engRoles');
const OperartionalExpenses = require('./src/models/operationalExpenses');
const RoleMaster = require('./src/models/roleMaster');
const Tax = require('./src/models/tax');
const template = require('./src/models/template');
const WorkScope = require('./src/models/workScope');
const ServiceMaster = require('./src/models/serviceMaster');


app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(fileUpload()); //middleware to get files from req

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
    console.debug(
        `Req in app.js
        \n:: ${JSON.stringify(req.body)}
        \n:: ${JSON.stringify(req.query)}
        \n:: ${JSON.stringify(req.originalUrl)}`
    );
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');

    next();
});

try {
    const appRouter = require('./routes/index')
    app.use(appRouter);
} catch (error) {
    console.error("Error in api routes", error.message)
}

Object.keys(sequelize.models).forEach((modelName) => {
    console.log("DB models::", modelName);
});

try {
    sequelize
    .sync().then(() => {
        console.log("Connection to database successful....")
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        });
    }).catch((error)=>{
        console.log("Error while creating connection....", error.message)
    })
   
} catch (error) {
    console.error(error.message, "Something went wrong")
}


