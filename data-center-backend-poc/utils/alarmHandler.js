import Device from "../models/Device.js";
import User from "../models/User.js";
import Alarm from "../models/Alarm.js";
import { mailTransport } from "./Mail.js";

const AlarmHandler = async (req, res, next) => {
  try {
    console.log("Running Alarm...");
    //get result from db
    const result = await Device.findOne().sort("-timestamp");

    //check alarm condition
    if (result.temperature >= 30 || result.humidity >= 80) {
      const data = new Alarm({
        _id: result._id,
        temperature: result.temperature,
        humidity: result.humidity,
        isDoorOpen: result.isDoorOpen,
        isWaterDetected: result.isWaterDetected,
        isSmokeDetected: result.isSmokeDetected,
        timestamp: result.timestamp,
        isAlarm: true,
        type: "Critical",
      });

      await data.save();

      const currentTime = new Date();
      const twoMinutesAgo = new Date(currentTime.getTime() - 2 * 60 * 1000);
      const oneHourAgo = new Date(currentTime.getTime() - 60 * 60 * 1000);

      const lastAlarmOneHourAgo = await Alarm.findOne({
        timestamp: { $lt: Number(twoMinutesAgo) },
      }).sort({ timestamp: -1 });

      const latestAlarm = await Alarm.find();

      if (
        lastAlarmOneHourAgo &&
        !lastAlarmOneHourAgo.isEmailSent &&
        (lastAlarmOneHourAgo.temperature !== result.temperature ||
          lastAlarmOneHourAgo.humidity !== result.humidity)
      ) {
        //sent email
        sendEmail(result.temperature, result.humidity, "Critical");

        await Alarm.findOneAndUpdate(
          { _id: result._id },
          { isEmailSent: true },
          {
            new: true,
            runValidators: true,
          }
        );
      } else if (latestAlarm.length <= 1) {
        //sent email
        sendEmail(result.temperature, result.humidity, "Critical");

        await Alarm.findOneAndUpdate(
          { _id: result._id },
          { isEmailSent: true },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    }
  } catch (error) {
    Error(error);
  }
};

const sendEmail = async (temperature, humidity, type) => {
  try {
    const users = await User.find();

    for (let i = 0; i < users.length; i++) {
      await mailTransport(users[i].email, temperature, humidity, type);
    }
  } catch (error) {
    Error(error);
  }
};

export default AlarmHandler;
