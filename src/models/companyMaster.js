const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const CompanyMaster = sequelize.define('CompanyMaster',{
    company_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    company_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    branch_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    company_type: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    company_email: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    company_reg_number: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    pan_no: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    tan_no: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    gst_no: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    company_logo: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    client_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

// CompanyMaster.sync({force: true})
//   .then(() => {
//     console.log('User table created or updated successfully.');
//   })
//   .catch(error => {
//     console.error('Error syncing the User table:', error);
//   });


module.exports = CompanyMaster