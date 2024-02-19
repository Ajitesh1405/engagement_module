const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const CompanyMaster = sequelize.define('CompanyMaster',{
    comapny_id: { 
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

    service_line_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    
    major_buisness_line_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    billable_service_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    company_email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
    company_contact_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    pan_no: { 
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
    
    created_at: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    updated_at: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = CompanyMaster