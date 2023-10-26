import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { tokens } from "@/src/theme";

import Header from "../../common/Header";
import DataTable from "../../common/DataTable";

import { mockDataContacts } from "@/src/data/mockData";

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define Columns
  /** @type {import("@mui/x-data-grid").GridColDef} */
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "registrarId", headerName: "Registrar ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "tableCell--name",
      flex: 1,
      minWidth: 200,
    },
    { field: "age", headerName: "Age", width: 100 },
    { field: "phone", headerName: "Phone Number", minWidth: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "address", headerName: "Address", flex: 1, minWidth: 250 },
    { field: "city", headerName: "City", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 100 },
  ];
  
  return (
    <Box>
      <Header
        title="contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <DataTable
        rows={mockDataContacts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        sxProps={{
          "& .tableCell--name": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100],
          }
        }}
      />
    </Box>
  );
}
