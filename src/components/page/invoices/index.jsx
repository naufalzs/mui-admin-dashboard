import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/src/theme";

import Header from "../../common/Header";
import DataTable from "../../common/DataTable";

import { mockDataInvoices } from "@/src/data/mockData";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define Columns
  /** @type {import("@mui/x-data-grid").GridColDef} */
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "tableCell--name",
      flex: 1,
      minWidth: 200,
    },
    { field: "phone", headerName: "Phone Number", minWidth: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "cost",
      headerName: "Cost",
      cellClassName: "tableCell--cost",
      valueFormatter: (params) => {
        return `$${params.value}`;
      },
      width: 100,
    },
    { field: "date", headerName: "Date", width: 200 },
  ];
  
  return (
    <Box>
      <Header title="invoices" subtitle="List of Invoice Balances" />
      <DataTable
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        sxProps={{
          "& .tableCell--name": {
            color: colors.greenAccent[300],
          },
          "& .tableCell--cost": {
            color: colors.greenAccent[300],
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
}
