import React, { useEffect, useState } from "react";

import io from "socket.io-client";

import { Header, Gauge, LED, LineChart, DataTable } from "../components";

import Wrapper from "../assets/wrappers/HomeStyle";

const ENDPOINT = "http://127.0.0.1:4001";

const Home = () => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setSocket(io(ENDPOINT));
  }, []);

  useEffect(() => {
    socket?.emit("initial_data");
    socket?.on("get_data", (data) => {
      setData(data);
    });
  }, [socket, data]);

  const getTempArr = () => {
    let dataArr = [];
    for (let i = 0; i < data?.length; i++) {
      dataArr?.push(data[i].temperature);
    }
    return dataArr;
  };

  const getHumArr = () => {
    let dataArr = [];
    for (let i = 0; i < data?.length; i++) {
      dataArr?.push(data[i].humidity);
    }
    return dataArr;
  };

  return (
    <Wrapper>
      <Header />
      <section className="main-row-1">
        <div className="main-row-1-col-1">
          <Gauge
            sensorType="Temperature"
            min={10}
            max={30}
            data={data[0]?.temperature}
          />
          <Gauge
            sensorType="Humidity"
            min={8}
            max={80}
            data={data[0]?.humidity}
          />
        </div>

        <div className="main-row-1-col-2">
          <div className="main-row-1-col-2-row-1">
            <LED lightStatus={data[0]?.isDoorOpen} />
            <p className="led-text">
              {data[0]?.isDoorOpen ? "Door Opened" : "Door Closed"}
            </p>
          </div>
          <div className="main-row-1-col-2-row-1">
            <LED lightStatus={data[0]?.isWaterDetected} />
            <p className="led-text">
              {data[0]?.isWaterDetected
                ? "Water Detected"
                : "No Water Detected"}
            </p>
          </div>
          <div className="main-row-1-col-2-row-1">
            <LED lightStatus={data[0]?.isSmokeDetected} />
            <p className="led-text">
              {data[0]?.isSmokeDetected
                ? "Smoke Detected"
                : "No Smoke Detected"}
            </p>
          </div>
        </div>
      </section>

      <section className="main-row-2">
        <div className="main-row-2-col-2">
          <LineChart deviceTmp={getTempArr()} deviceHum={getHumArr()} />
        </div>
        <div className="main-row-2-col-2">
          <DataTable />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
