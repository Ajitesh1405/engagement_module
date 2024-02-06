const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const Templates = sequelize.define('Templates',{
    template_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    template_format: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = Templates