import { Box } from "@mui/material";
import Header from "../../../common/Header";
import BarChart from "../../../common/BarChart";

export default function BarChartPage() {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
