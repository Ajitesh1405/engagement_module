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

    branch: {
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

    pan_no: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    contact_number: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    company_logo: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    billing_service: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    org_type_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
    
    created_by: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    updated_by: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = CompanyMaster