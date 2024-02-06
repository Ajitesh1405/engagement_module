const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const OperationalExpenses = sequelize.define('OperationalExpenses',{
    ope_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    ope_name: { 
        type: Sequelize.STRING,
        allowNull: true
    },

    ope_amount: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = OperationalExpenses