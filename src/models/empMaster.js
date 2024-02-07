const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const EmpMaster = sequelize.define('EmpMaster',{
    emp_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    first_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    middle_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    last_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    password: { 
        type: Sequelize.STRING,
        allowNull: true,
    },

    role_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    department: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    service_line: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    address: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    contact_number: { 
        type: Sequelize.BIGINT,
        allowNull: true, 
    },

    email: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    profile_pic: { 
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
}
);

module.exports = EmpMaster