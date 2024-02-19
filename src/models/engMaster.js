const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const EnagegmentMaster = sequelize.define('EnagegmentMaster',{
    eng_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    eng_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    eng_company_entity_id: {  //company id
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    billing_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    eng_emp_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    eng_role_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    scope_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    financial_year: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    background_client_entity: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    background_billable_service_eng: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    start_date: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    deliverables_date: { 
        type: Sequelize.DATE,
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

module.exports = EnagegmentMaster