import mongoose from "mongoose";

const AlarmSchema = new mongoose.Schema({
  _id: {
    type: String,
  },

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

  isAlarm: {
    type: Boolean,
    default: false,
  },

  originator: {
    type: String,
    default: "N*able Admin",
  },

  type: {
    type: String,
  },

  status: {
    type: String,
    default: "Pending",
  },

  isEmailSent: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("alarm", AlarmSchema);
