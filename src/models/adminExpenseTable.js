const sequelize = require('../database/sequelizeConnection');
const Sequelize = require('sequelize')

const AdminExpense = sequelize.define('AdminExpense', {
    admin_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    admin_expense:{
        type: Sequelize.STRING,
        allowNull: true
    },
    
});

module.exports = AdminExpense