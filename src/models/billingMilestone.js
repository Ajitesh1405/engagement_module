const sequelize = require('../database/sequelizeConnection')
const Sequelize = require('sequelize');

const BillingMilestone = sequelize.define('BillingMilestone', {
    milestone_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    billing_milestone:{
        type: Sequelize.STRING,
        allowNull: true
    },

    deliverables:{
        type: Sequelize.STRING,
        allowNull: true
    },

    status:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports =  BillingMilestone;