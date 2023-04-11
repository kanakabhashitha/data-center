import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// database connection
import connectBD from "./db/connect.js";

//routes
import deviceRouter from "./routes/deviceRoutes.js";

app.use("/api/v1/device", deviceRouter);

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
