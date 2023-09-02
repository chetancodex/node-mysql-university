const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const Dean = sequelize.define('Dean', {
    DeanId: {
      type: Sequelize.STRING,
      primarykey : true,
      allowNull : false
    },
    hash_password : {
      type: Sequelize.STRING,
      allowNull : false
    },
  });

  Dean.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  };
  return Dean;
};