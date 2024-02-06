const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const ClientMaster = sequelize.define('ClientMaster', {
    client_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    client_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    organisation_type: { 
        type: Sequelize.STRING,
        allowNull: true,
    },

    client_email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    registered_address: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    share_holders_name: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    sh_designation: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    sh_contact_number: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    sh_email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },
    
    updated_by: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    status: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },
});

module.exports = ClientMaster