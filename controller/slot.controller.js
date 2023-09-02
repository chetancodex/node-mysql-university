const { Op } = require("sequelize");
const db = require("../config/index");
const moment = require("moment");
const slot = db.Slot;
const Student = db.Student;
const Dean = db.Dean;

exports.book = async (req, res) => {
  const { studentId, slot_time } = req.body;

  try {
    const existingSession = await slot.findOne({ where: { slot_time } });
    const status = "booked";

    if (existingSession) {
      return res.status(400).json({ message: "Slot not available" });
    }

    await slot.create({ studentId, slot_time, status });

    return res.status(200).json({ message: "Session booked successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPendingSessions = async (req, res) => {
  try {
    const time = new Date();
    const booked = "booked";
    const allBooked = await slot.findAll({ where: { status: booked } });
    console.log(allBooked);
    const pendingSessions = await slot.findAll({
      where: { status: booked, slot_time: { [Op.gte]: time } },
    });
    return res
      .status(200)
      .json({ pending_sessions: pendingSessions, allBooked: allBooked });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
