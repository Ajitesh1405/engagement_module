const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const BillingFrequency = sequelize.define('BillingFrequency',{
    frequency_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    frequency_name: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    frequency_occurrence:{
        type: Sequelize.STRING,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = BillingFrequency