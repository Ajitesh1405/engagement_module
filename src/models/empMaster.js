const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const EmpMaster = sequelize.define('EmpMasters',{
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    employee_number: {
        type: Sequelize.STRING,
        allowNull: true,
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

    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    nationality: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    contact_number: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    country: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    company_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    service_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    job_title: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    skill_tags: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
    },

    qualification: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    reporting_manager_id: {
        type: Sequelize.STRING,
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
    
    updated_by: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },

    status: { 
        type: Sequelize.STRING,
        allowNull: true, 
    },
}
);

EmpMaster.associate = function(models) {
    EmpMaster.hasMany(models.SkillTag, {
      foreignKey: 'skill_id',
      as: 'skillTags'
    });
};

module.exports = EmpMaster