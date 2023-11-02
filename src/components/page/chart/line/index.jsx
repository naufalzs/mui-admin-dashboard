import { Box } from "@mui/material";
import Header from "@/src/components/common/Header";
import LineChart from "@/src/components/common/LineChart";

export default function LineChartPage() {
  return (
    <Box>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
