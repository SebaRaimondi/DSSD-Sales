'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Sales", "price", {
      type: Sequelize.DOUBLE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Sales", "price", {
      type: Sequelize.INTEGER
    })
  }
};
