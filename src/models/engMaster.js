const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const EnagegmentMaster = sequelize.define('EnagegmentMaster',{
    eng_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    template_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    client_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_entity_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    person_incharge_id:{
        type: Sequelize.STRING,
        allowNull: true
    },

    billable_service_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    eng_date:{
        type: Sequelize.DATE,
        allowNull: true
    },

    bg_of_client_entity:{
        type: Sequelize.STRING,
        allowNull: true
    },

    bg_of_the_service_and_eng:{
        type: Sequelize.STRING,
        allowNull: true
    },

    scope_eng_heading:{
        type: Sequelize.STRING,
        allowNull: true
    },

    scope_eng_sub_heading:{
        type: Sequelize.STRING,
        allowNull: true
    },

    scope_eng_work:{
        type: Sequelize.STRING,
        allowNull: true
    },

    scope_eng_limitations:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    eng_emp_id:{
        type: Sequelize.STRING,
        allowNull: true
    },

    eng_role_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    financial_year: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    start_date:{
        type: Sequelize.DATE,
        allowNull: true,
    },

    deliverables_date: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    currency_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    frequency_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_freq_date:{
        type: Sequelize.DATE,
        allowNull: true,
    },

    scope_of_work:{
        type: Sequelize.STRING,
        allowNull: true
    },

    deliverables:{
        type: Sequelize.STRING,
        allowNull: true
    },

    delivery_date:{
        type: Sequelize.DATE,
        allowNull: true
    },

    fees:{
        type: Sequelize.STRING,
        allowNull: true
    },

    billing_schedule:{
        type: Sequelize.STRING,
        allowNull: true
    },

    milestone_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    milestone_percent: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    milestone_deliverables:{
        type: Sequelize.STRING,
        allowNull: true
    },

    milestone_fees:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    ope_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    ope_amount:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    admin_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    admin_expense_amount:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    tax_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    grand_total:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    level_1_billing_entity_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    level_2_billing_entity_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    level_3_billing_entity_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    reviwer_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    
    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

}
);

module.exports = EnagegmentMaster