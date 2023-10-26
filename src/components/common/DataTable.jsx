import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/src/theme";

export default function DataTable({ rows, columns, sxProps, ...props }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{
        "&.MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-row": {
          bgcolor: colors.grey[800],
          "&.Mui-selected": {
            bgcolor: colors.grey[900],
          },
        },
        "& .MuiDataGrid-columnHeaders": {
          bgcolor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-footerContainer": {
          bgcolor: colors.blueAccent[700],
          borderTop: "none",
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        ...sxProps,
      }}
      {...props}
    />
  );
}
