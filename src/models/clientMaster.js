const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const ClientMaster = sequelize.define('ClientMaster', {
    client_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    client_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    organization_type: { 
        type: Sequelize.STRING,
        allowNull: true,
    },

    industry_type: { 
        type: Sequelize.STRING,
        allowNull: true,
    },

    client_email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    registered_address: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    key_person_name: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    key_person_email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    key_person_designation: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    key_person_gender: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    key_person_incharge_id: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    billable_financial_year: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    date_of_first_onboarding: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    company_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    region: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    deal_origination_person_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    sales_incharge_person_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    operation_incharge_person_id: { 
        type: Sequelize.INTEGER,
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
});

module.exports = ClientMaster