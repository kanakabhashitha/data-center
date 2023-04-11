const mqtt = require("mqtt");
require("dotenv").config();
const fs = require("fs");

const client = mqtt.connect(process.env.BROKER_URL, {
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  clientId: process.env.CLIENT_ID,
});

const topic = process.env.TOPIC;

let msg;
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

//subscriber
// receive a message from the subscribed topic
client.on("connect", () => {
  console.log(`Is client connected: ${client.connected}`);

  if (client.connected === true) {
    console.log(
      `Client has listen successfully Broker URL : ${process.env.BROKER_URL} `
    );
    client.subscribe(topic);
  }
});

// receive a message from the subscribed topic
client.on("message", (topic, message) => {
  //   writeData(JSON.parse(message));
  msg = JSON.parse(message);
  readData();
});

// error handling
client.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

//read data
function readData() {
  fs.readFile("./DataFile.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      let resultArr = [];
      if (data.length > 0) {
        obj = JSON.parse(data);

        console.log("overide");

        for (let i = 0; i < obj.length; i++) {
          resultArr.push({
            id: obj[i].id,
            temperature: obj[i].temperature,
            humidity: obj[i].humidity,
            date: obj[i].date,
            time: obj[i].time,
          });
        }

        resultArr.push({
          id: Date.now(),
          temperature: msg.temperature,
          humidity: msg.humidity,
          date: `${year}-${month}-${day}`,
          time: `${hour}:${minute}:${second}`,
        });

        writeData(resultArr);
      } else {
        let resultArr = [];
        console.log("original");
        resultArr.push({
          id: Date.now(),
          temperature: msg.temperature,
          humidity: msg.humidity,
          date: `${year}-${month}-${day}`,
          time: `${hour}:${minute}:${second}`,
        });
        writeData(resultArr);
      }
    }
  });
}

// write a data to json file
function writeData(data) {
  fs.writeFile("./DataFile.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
}
