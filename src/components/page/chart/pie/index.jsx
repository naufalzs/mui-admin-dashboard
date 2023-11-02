import { Box } from "@mui/material";
import Header from "@/src/components/common/Header";
import PieChart from "@/src/components/common/PieChart";

export default function PieChartPage() {
  return (
    <Box>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
