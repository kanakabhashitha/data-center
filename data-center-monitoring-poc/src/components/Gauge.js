import React from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Wrapper from "../assets/wrappers/GaugeStyle";

import _ from "lodash";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
HighchartsExporting(Highcharts);
HighchartsMore(Highcharts);
HighchartsAccessibility(Highcharts);

const getOptions = (type, sensorType, data, min, max) => ({
  chart: {
    type,
    width: 410,
    height: 300,
  },
  title: {
    // text: _.startCase(`${type} chart`),
    text: "",
  },
  accessibility: {
    description: " ",
  },
  pane: {
    startAngle: -90,
    endAngle: 89.9,
    background: null,
    center: ["50%", "70%"],
    size: "100%",
    screenX: 10,
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: sensorType,
    },
    plotBands: [
      {
        from: 0,
        to: min,
        color: "#ffff00",
        thickness: 15,
      },
      {
        from: min,
        to: max,
        color: "#00FF00",
        thickness: 15,
      },
      {
        from: max,
        to: 100,
        color: "#FF0000",
        thickness: 15,
      },
    ],
  },
  series: [
    {
      data: [data],
      animation: false,
      name: sensorType,
    },
  ],
  credits: {
    enabled: false,
  },
});

const Gauge = ({ sensorType, data, min, max }) => {
  return (
    <Wrapper>
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions("gauge", sensorType, data, min, max)}
      />
    </Wrapper>
  );
};

export default Gauge;
