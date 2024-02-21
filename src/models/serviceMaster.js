const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection')

const ServiceMaster = sequelize.define('ServiceMaster', {
    service_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    practice_vertical: {
        type: Sequelize.STRING,
        allowNull: true
    },

    service_line: {
        type: Sequelize.STRING,
        allowNull: true
    },

    billable_service: {
        type: Sequelize.STRING,
        allowNull: true
    },

    status:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = ServiceMaster