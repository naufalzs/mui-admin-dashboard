import { Box } from "@mui/material";
import Header from "@/src/components/common/Header";
import GeoChart from "@/src/components/common/GeoChart";
import { useTheme } from "@emotion/react";
import { tokens } from "@/src/theme";

export default function GeoChartPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
}
