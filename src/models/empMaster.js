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
    
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    password: { 
        type: Sequelize.STRING,
        allowNull: true,
    },

    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    nationality: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    contact_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    onsite_location: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    company_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    service_line_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    major_buisness_line_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    role_id: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    reporting_manager_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    worker_type: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    unique_id: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },
    
    profile_pic: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    created_at: { 
        type: Sequelize.DATE,
        allowNull: true, 
    },

    updated_at: { 
        type: Sequelize.DATE,
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