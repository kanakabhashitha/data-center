import Device from "../models/Device.js";
import moment from "moment";

const createDevice = async (req, res, next) => {
  try {
    const {
      temperature,
      humidity,
      isDoorOpen,
      isWaterDetected,
      isSmokeDetected,
    } = req.body;

    if (!temperature || !humidity) {
      res.status(400).send("Please provide all values");
      throw new Error("Please provide all values");
    }

    const data = new Device({
      temperature: temperature,
      humidity: humidity,
      isDoorOpen: isDoorOpen,
      isWaterDetected: isWaterDetected,
      isSmokeDetected: isSmokeDetected,
      timestamp: Date.now(),
    });

    const device = await data.save();
    res.status(200).json(device);
  } catch (error) {
    next(error);
  }
};

const getAllDeviceData = async (req, res, next) => {
  try {
    //get result from db
    const result = await Device.find().sort("-timestamp");

    res.status(200).json({ devices: result });
  } catch (error) {
    next(error);
  }
};

export { createDevice, getAllDeviceData };
