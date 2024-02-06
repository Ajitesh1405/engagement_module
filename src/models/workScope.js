const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const WorkScope = sequelize.define('WorkScope',{
    scope_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    heading: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    sub_heading: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    work_scope: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    scope_limitations: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = WorkScope