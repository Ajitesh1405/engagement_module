const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const Tax = sequelize.define('Tax',{
    tax_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    tax_name: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    tax_percent: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = Tax