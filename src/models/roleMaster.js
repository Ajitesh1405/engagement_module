const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const RoleMaster = sequelize.define('RoleMaster', {
    role_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    role_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
    updated_by: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = RoleMaster