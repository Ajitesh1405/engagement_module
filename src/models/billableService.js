const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const BillableService = sequelize.define('BillableService',{
    billable_service_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    billable_service_name: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = BillableService;