import React from "react";
import Wrapper from "../assets/wrappers/LineChartStyle";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);

const getOptions = (type, deviceTmp, deviceHum, deviceTime) => ({
  chart: {
    type,
    width: 650,
    height: 290,
  },

  title: {
    text: _.startCase(`Server Room Temperature and Humidity chart`),
    margin: 30,
  },

  yAxis: {
    title: {
      text: "Values",
    },

    plotLines: [
      {
        value: 25,
        color: "black",
        width: 1,
        dashStyle: "dash",
        label: {
          text: "Maximum Level of Temperature : 30",
          align: "center",
          x: -10,
        },
      },

      {
        value: 50,
        color: "black",
        width: 1,
        dashStyle: "dash",
        label: {
          text: "Maximum Level of Humidity : 80",
          align: "center",
          x: -10,
        },
      },
    ],
  },

  xAxis: {
    title: {
      text: "Time",
    },
    categories: deviceTime,
    reversed: true,
  },

  series: [
    {
      data: deviceTmp,
      name: "Temperature",
      color: "red",
      width: 2,
    },
    {
      data: deviceHum,
      name: "Humidity",
      color: "#ff6600",
      width: 2,
    },
  ],

  credits: {
    enabled: false,
  },
});

const LineChart = ({ deviceTmp, deviceHum, deviceTime }) => {
  return (
    <Wrapper>
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("line", deviceTmp, deviceHum, deviceTime)}
      />
    </Wrapper>
  );
};

export default LineChart;
