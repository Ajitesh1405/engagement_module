const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const BillingMaster = sequelize.define('BillingMaster',{
    billing_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    billing_currency_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_freq_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    billing_ope_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },
    
    tax_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    payement_days: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = BillingMaster