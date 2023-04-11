import React from "react";
import Wrapper from "../assets/wrappers/LineChartStyle";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);

const getOptions = (type, deviceTmp, deviceHum) => ({
  chart: {
    type,
    width: 650,
    height: 290,
  },
  title: {
    text: _.startCase(`Server Room Temperature and Humidity chart`),
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      data: deviceTmp,
      name: "Temperature",
    },
    {
      data: deviceHum,
      name: "Humidity",
    },
  ],
  credits: {
    enabled: false,
  },
});

const LineChart = ({ deviceTmp, deviceHum }) => {
  return (
    <Wrapper>
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("line", deviceTmp, deviceHum)}
      />
    </Wrapper>
  );
};

export default LineChart;
