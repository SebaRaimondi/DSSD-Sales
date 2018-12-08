'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Sales', 'couponDiscount', {
            type: Sequelize.INTEGER,
        })
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('Sales', 'couponDiscount')
    }
};


