const Sequelize = require('sequelize');
const sequelize = require('../database/sequelizeConnection');

const MajorBuisnessLine = sequelize.define('MajorBuisnessLine', {
    major_buisness_line_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    major_buisness_line_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = MajorBuisnessLine;