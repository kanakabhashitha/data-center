import User from "../models/User.js";

const register = async (req, res, next) => {
  try {
    const { userName, email } = req.body;

    //check null values
    if (!userName || !email) {
      res.status(400).send("Please provide all values");
      throw new Error("Please provide all values");
    }

    //check email already exist
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      res.status(400).send("Email is already exists");
      throw new Error("Email is already exists");
    }

    // create data object
    const user = new User({
      userName: userName,
      email: email,
    });

    //save user
    await user.save();

    res.status(201).json({ user: user });
  } catch (error) {
    next(error);
  }
};

export { register };
