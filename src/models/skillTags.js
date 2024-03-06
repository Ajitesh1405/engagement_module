const sequelize = require('../database/sequelizeConnection');
const Sequelize = require('sequelize');

const SkillTags = sequelize.define('SkillTags',{
    skill_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    skill_name: {
        type: Sequelize.STRING,
        allowNull: true
    }
    ,
    created_by:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = SkillTags;