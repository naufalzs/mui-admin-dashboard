import { ColorModeContext, tokens } from "@/src/theme";
import {
  DarkModeOutlined,
  LightModeOutlined,
  ManageAccountsOutlined,
  MenuOutlined,
  NotificationsOutlined,
  PersonOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";

export default function Topbar({ setToggleSidebar }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = !!menuAnchor;
  const handleClickMenu = (e) => setMenuAnchor(e.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* Sidebar Toggler */}
      {isMobile && (
        <IconButton onClick={() => setToggleSidebar(true)} sx={{ mr: 2 }}>
          <MenuOutlined />
        </IconButton>
      )}

      {/* Search Bar */}
      <Box
        display="flex"
        flexGrow={isMobile && 1}
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button">
          <Search />
        </IconButton>
      </Box>

      {/* Icons */}
      {!isMobile ? (
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <PersonOutlined />
          </IconButton>
        </Box>
      ) : (
        <Box ml={2}>
          <IconButton onClick={handleClickMenu}>
            <ManageAccountsOutlined />
          </IconButton>
          <Menu anchorEl={menuAnchor} open={menuOpen} onClose={handleCloseMenu}>
            <MenuItem>
              <Box display="flex">
                <PersonOutlined />
                <Typography sx={{ ml: 1.5 }}>Profile</Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Box display="flex" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )}
                <Typography sx={{ ml: 1.5 }}>
                  {theme.palette.mode === "dark" ? "Dark" : "Light"} Mode
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box display="flex">
                <Badge badgeContent={3} variant="dot" color="error">
                  <NotificationsOutlined />
                </Badge>
                <Typography sx={{ ml: 1.5 }}>Notifications</Typography>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box display="flex">
                <SettingsOutlined />
                <Typography sx={{ ml: 1.5 }}>Setting</Typography>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
