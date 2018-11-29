'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    productid: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE,
    price: DataTypes.DOUBLE,
    listCaseId: DataTypes.INTEGER,
    couponDiscount: DataTypes.INTEGER,
  }, {});
  Sale.associate = function(models) {
    // associations can be defined here
  };
  return Sale;
};