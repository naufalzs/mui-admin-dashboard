import { tokens } from "@/src/theme";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box mb={isMobile ? "20px" : "30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
