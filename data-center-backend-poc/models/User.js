import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide user name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: true,
  },
});

export default mongoose.model("User", userSchema);
