import Alarm from "../models/Alarm.js";

const getAllAlarms = async (req, res, next) => {
  try {
    //get result from db
    const result = await Alarm.find().sort("-timestamp");

    res.status(200).json({ alarms: result });
  } catch (error) {
    next(error);
  }
};

export { getAllAlarms };
