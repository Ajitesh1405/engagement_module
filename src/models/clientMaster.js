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

    organisation_type: { 
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

    person_incharge_name: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    person_incharge_email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    person_incharge_contact_number: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    billable_financial_year: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    date_of_first_onbaording: { 
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

    deal_origination_person: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    sales_incharge_person: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    operation_incharge_person: { 
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