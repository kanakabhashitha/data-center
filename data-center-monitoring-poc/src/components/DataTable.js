import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
import moment from "moment";

const columns = [
  {
    field: "alarmTime",
    headerName: "Alarm Time",
    width: 200,
    editable: true,
  },
  {
    field: "originator",
    headerName: "Originator",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    width: 110,
    editable: true,
  },
  {
    field: "temperature",
    headerName: "Temperature",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "humidity",
    headerName: "Humidity",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
  },
];

const DataTable = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/alarm")
      .then(function (response) {
        setData(response.data.alarms);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data]);

  useEffect(() => {
    const newRows = [];
    for (let i = 0; i < data.length; i++) {
      newRows.push({
        id: data[i]._id,
        alarmTime: moment(data[i].timestamp).format("MMMM Do YYYY, h:mm:ss a"),
        originator: data[i].originator,
        type: data[i].type,
        temperature: data[i].temperature,
        humidity: data[i].humidity,
        status: data[i].status,
      });
    }
    setRows(newRows);
  }, [rows]);

  return (
    <>
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default DataTable;
