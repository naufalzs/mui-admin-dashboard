import {
  Box,
  Button,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../../common/Header";
import { tokens } from "@/src/theme";
import { DownloadOutlined } from "@mui/icons-material";
import StatBox from "../../common/StatBox";
import LineChart from "../../common/LineChart";
import { mockDataDashboard, mockTransactions } from "@/src/data/mockData";
import ProgressCircle from "../../common/ProgressCircle";
import BarChart from "../../common/BarChart";
import GeoChart from "../../common/GeoChart";

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        mb={isMobile && 3}
      >
        <Header title="dashboard" subtitle="Welcome to your Dashboard" />

        <Button
          color="button"
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* Grid and Chart */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        {mockDataDashboard.map((stats) => (
          <Box
            key={stats.id}
            gridColumn={isMobile ? "span 6" : "span 3"}
            backgroundColor={colors.primary[400]}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <StatBox
              title={stats.title}
              total={stats.total}
              progress={stats.progress}
              increase={stats.increase}
              icon={
                <Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }}>
                  {stats.icon}
                </Icon>
              }
            />
          </Box>
        ))}

        {/* Row 2 */}
        <Box
          gridColumn={isTablet ? "span 12" : "span 8"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            overflowX: isMobile ? "scroll" : "hidden",
            overflowY: "hidden",
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            width={isMobile ? "680px" : "auto"}
            height="250px"
            m="-20px 0 0 0 "
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* transaction */}
        <Box
          gridColumn={isMobile ? "span 12" : isTablet ? "span 6" : "span 4"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            alignItems="center"
            borderBottom={`4px solid ${colors.background.default}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transaction
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.background.default}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Box width="90px">
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                width="65px"
                backgroundColor={colors.greenAccent[500]}
                fontWeight="600"
                color={colors.primary[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}
        <Box
          gridColumn={isMobile ? "span 12" : isTablet ? "span 6" : "span 4"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size={isMobile ? "100" : "125"} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Include extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn={isMobile ? "span 12" : isTablet ? "span 6" : "span 4"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            overflowX: isMobile ? "scroll" : "hidden",
            overflowY: "hidden",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ m: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box width={isMobile ? "380px" : "auto"} height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={isMobile ? "span 12" : isTablet ? "span 6 " : "span 4"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
