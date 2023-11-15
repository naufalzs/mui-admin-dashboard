import { navigationData } from "@/src/data/navigationData";
import { tokens } from "@/src/theme";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, Sidebar as SidebarContainer } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const SectionTitle = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (title === "") return <></>;

  return (
    <Typography
      variant="h6"
      component="div"
      color={colors.grey[300]}
      sx={{ pl: "20px", pt: "15px" }}
    >
      {title}
    </Typography>
  );
};

const Item = ({ title, to, icon, setToggleSidebar }) => {
  const location = useLocation();

  return (
    <MenuItem
      active={location.pathname === to}
      icon={<Icon baseClassName="material-icons-outlined">{icon}</Icon>}
      component={<Link to={to} />}
      onClick={() => {
        setToggleSidebar(false);
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isTabletOnly = useMediaQuery((theme) => theme.breakpoints.only("sm"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [isCollapsed, setIsCollapsed] = useState(isTablet ? true : false);

  const navigationList = navigationData.map((navGroup) => (
    <Box key={navGroup.id}>
      <SectionTitle title={navGroup.title} />
      {navGroup.list.map((nav) => (
        <Item
          key={nav.id}
          title={nav.title}
          to={nav.to}
          icon={nav.icon}
          setToggleSidebar={setToggleSidebar}
        />
      ))}
    </Box>
  ));

  return (
    <SidebarContainer
      breakPoint="sm"
      collapsed={isCollapsed}
      toggled={toggleSidebar}
      onBackdropClick={() => setToggleSidebar(!toggleSidebar)}
      backgroundColor={colors.primary[400]}
      style={{ border: "none" }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: "transparent !important",
              color: `${
                active ? colors.blueAccent[400] : colors.grey[100]
              } !important`,
              ":hover": {
                color: `${colors.blueAccent[400]} !important`,
              },
            };
          },
        }}
      >
        {/* Title and Menu Toggler */}
        {!isMobile && (
          <MenuItem
            onClick={
              isTabletOnly ? undefined : () => setIsCollapsed(!isCollapsed)
            }
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  textTransform="uppercase"
                >
                  Admin
                </Typography>
                <IconButton
                  onClick={
                    isTabletOnly
                      ? undefined
                      : () => setIsCollapsed(!isCollapsed)
                  }
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        )}

        {/* User */}
        {!isCollapsed && (
          <Box mb={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src={`assets/user/naufal.png`}
                width="100px"
                height="100px"
                alt="User Naufal Profile Picture"
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mt: 2.5, mb: 0.5 }}
              >
                Naufal Zufar
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                color={colors.greenAccent[500]}
              >
                Super Admin
              </Typography>
            </Box>
          </Box>
        )}

        {navigationList}
      </Menu>
    </SidebarContainer>
  );
}
