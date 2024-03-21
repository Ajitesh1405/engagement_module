'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('WorkScopes', 'eng_id', {
      type: Sequelize.INTEGER, // Change the data type as needed
      allowNull: true, // Set as false if the field is required
      // You can add other column options here (default values, unique constraints, etc.)
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
