const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const AdminTable = sequelize.define('AdminTable',{
    admin_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    admin_email:{
        type: Sequelize.STRING,
        allowNull: true
    },

    admin_password:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = AdminTable