const sequelize = require('../database/sequelizeConnection');
const Sequelize = require('sequelize');

const Qualifications = sequelize.define('Qualifications',{
    qualification_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qualification_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    created_by:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Qualifications