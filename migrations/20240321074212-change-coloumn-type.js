'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('EnagegmentMasters', 'scope_eng_limitations',{
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('EnagegmentMasters', 'scope_eng_limitations', {
      type: Sequelize.INTEGER,  // Revert to the old data type
      allowNull: true // Ensure this matches the original state
    });
  }
};
