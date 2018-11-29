'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Sales', 'listCaseId', {
      type: Sequelize.INTEGER,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Sales', 'listCaseId')
  }
};
