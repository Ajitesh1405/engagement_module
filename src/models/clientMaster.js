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

    person_incharge_gender: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    l2_incharge: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    date_of_first_onbaording: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    billable_financial_year: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    company_id: { 
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