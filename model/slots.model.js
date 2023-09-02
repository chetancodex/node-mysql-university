const { Sequelize } = require("sequelize");
const db = require('../config/index');


module.exports = (sequelize, Sequelize) => {
  const Slot = sequelize.define("Slot", {
    studentId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM("Pending", "Booked"),
      defaultValue: "Pending",
    },
    slot_time : {
      type : Sequelize.DATE,
      allowNull : false,
    }
  });
  return Slot;
};
