const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const dotenv = require("dotenv");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

dotenv.config();
app.use(express.json());
app.use(cors());

const db = require("monk")(process.env.MONGO_URL);
// const db = require("monk")(
//   "mongodb+srv://kanaka:11225@nodeexpressprojects.3nte6.mongodb.net/DataCenterDatabase?retryWrites=true&w=majority"
// );
const collection_devices = db.get("telementrydatas");

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("initial_data", () => {
    collection_devices.find({}, { sort: "-timestamp" }).then((docs) => {
      const limitedDocs = docs.slice(0, 5);
      io.sockets.emit("get_data", limitedDocs);
    });
  });
});

const PORT = 4001;

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
