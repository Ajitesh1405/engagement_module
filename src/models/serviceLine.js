const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const ServiceLine = sequelize.define('ServiceLine', {
    service_line_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    service_line_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = ServiceLine;