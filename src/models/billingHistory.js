const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const BillingMaster = sequelize.define('BillingMaster',{
    billing_master_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    eng_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_currency_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_freq_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },
    
    billing_freq_date:{
        type: Sequelize.DATE,
        allowNull: true,
    },

    scope_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    milestone_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    milestone_percent:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    milestone_fees:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    billing_ope_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_ope_amount: { 
        type: Sequelize.FLOAT,
        allowNull: true
    },
    
    tax_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    tax_amount: { 
        type: Sequelize.FLOAT,
        allowNull: true
    },

    total:{
        type: Sequelize.FLOAT,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = BillingMaster