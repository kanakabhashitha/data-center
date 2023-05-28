import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// database connection
import connectBD from "./db/connect.js";

//import alarms
import AlarmHandler from "./utils/alarmHandler.js";

//routes
import deviceRouter from "./routes/deviceRoutes.js";
import alarmRouter from "./routes/alarmRoutes.js";
import authRouter from "./routes/authRoutes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/device", deviceRouter);
app.use("/api/v1/alarm", alarmRouter);

//call alarms
AlarmHandler();

//set alarm handler function
const alarmRunOnTime = () => {
  setInterval(() => {
    AlarmHandler();
  }, 10000);
};

alarmRunOnTime();

//database connection
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectBD(process.env.MONGO_URL);

    app.listen(port, () => {
      console.log(`Server Is Listening Port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
