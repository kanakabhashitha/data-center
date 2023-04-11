import React from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "createdTime",
    headerName: "Created Time",
    width: 150,
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
    field: "severity",
    headerName: "Severity",
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

const rows = [
  {
    id: 1,
    createdTime: "2022-03-27",
    originator: "Jon",
    type: "Critical",
    severity: "85%",
    status: "pending",
  },
  {
    id: 2,
    createdTime: "2022-03-28",
    originator: "Jon",
    type: "Warning",
    severity: "45%",
    status: "pending",
  },
  {
    id: 3,
    createdTime: "2022-03-29",
    originator: "Jon",
    type: "Warning",
    severity: "40%",
    status: "pending",
  },
];

const DataTable = () => {
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
