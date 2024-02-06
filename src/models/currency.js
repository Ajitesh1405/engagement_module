const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const Currency = sequelize.define('Currency',{
    currency_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    currency_name: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = Currency