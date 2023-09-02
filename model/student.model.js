const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('Student', {
    StudentId: {
      type: Sequelize.STRING,
      primarykey : true,
      allowNull : false
    },
    hash_password: {
      type: Sequelize.STRING,
      allowNull : false
    },
  });

  Student.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  };
  return Student;
};