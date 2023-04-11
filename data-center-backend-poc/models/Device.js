import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    require: true,
  },

  humidity: {
    type: Number,
    require: true,
  },

  timestamp: {
    type: Number,
    require: true,
  },

  isDoorOpen: {
    type: Boolean,
    default: false,
  },

  isWaterDetected: {
    type: Boolean,
    default: false,
  },

  isSmokeDetected: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("telementrydatas", DeviceSchema);
