import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "@/src/theme";
import ProgressCircle from "./ProgressCircle";

export default function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTabletOnly = useMediaQuery((theme) => theme.breakpoints.only("sm"));

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      p={isTabletOnly ? "20px" : "30px"}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant={isTabletOnly ? "h5" : "h4"}
            fontWeight="bold"
            color={colors.grey[100]}
          >
            {title}
          </Typography>
        </Box>

        <Box>
          <ProgressCircle
            progress={progress}
            size={isTabletOnly ? "30" : "40"}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography
          variant={isTabletOnly ? "h6" : "h5"}
          color={colors.greenAccent[500]}
        >
          {subtitle}
        </Typography>
        <Typography
          variant={isTabletOnly ? "h6" : "h5"}
          fontStyle="italic"
          color={colors.greenAccent[600]}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
