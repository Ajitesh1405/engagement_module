const sequelize = require('../database/sequelizeConnection');
const Sequelize = require('sequelize')

const CompanyService = sequelize.define('CompanyService', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    company_id:{
        type: Sequelize.INTEGER,
    },

    service_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    }

});

module.exports = CompanyService;