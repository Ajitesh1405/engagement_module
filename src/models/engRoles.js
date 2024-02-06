const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const EngRoles = sequelize.define('EngRoles',{
    role_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    role_name: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    created_by: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = EngRoles