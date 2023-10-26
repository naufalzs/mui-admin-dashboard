import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/src/theme";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

import Header from "../../common/Header";
import DataTable from "../../common/DataTable";

import { mockDataTeam } from "@/src/data/mockData";

export default function Team() {
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
    { field: "age", headerName: "Age", width: 100 },
    { field: "phone", headerName: "Phone Number", minWidth: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "accessLevel",
      headerName: "Access Level",
      minWidth: 200,
      renderCell: ({ row }) => {
        const access = row.access;

        const btnTheme = () => {
          switch (access) {
            case "admin":
              return {
                backgroundColor: colors.greenAccent[600],
                icon: <AdminPanelSettingsOutlined />,
              };

            case "manager":
              return {
                backgroundColor: colors.greenAccent[700],
                icon: <SecurityOutlined />,
              };

            default:
              return {
                backgroundColor: colors.greenAccent[900],
                icon: <LockOpenOutlined />,
              };
          }
        };

        return (
          <Box
            width="60%"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            p="5px"
            bgcolor={btnTheme().backgroundColor}
          >
            {btnTheme().icon}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  
  return (
    <Box>
      <Header title="team" subtitle="Managing the Team Members" />
      <DataTable
        checkboxSelection
        rows={mockDataTeam}
        columns={columns}
        sxProps={{
          "& .tableCell--name": {
            color: colors.greenAccent[300],
          },
        }}
      />
    </Box>
  );
}
