const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const ClientCompDetails = sequelize.define('ClientCompDetails',{
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    client_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    company_id: { 
        type: Sequelize.INTEGER,
        allowNull: true
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
}
);

module.exports = ClientCompDetails