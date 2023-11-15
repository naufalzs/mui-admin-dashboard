import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/page/global/Topbar";
import Sidebar from "./components/page/global/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container
            maxWidth="xl"
            disableGutters
            sx={{ height: "100vh", display: "flex", position: "relative" }}
          >
            <BrowserRouter>
              <Sidebar
                toggleSidebar={toggleSidebar}
                setToggleSidebar={setToggleSidebar}
              />
              <Box sx={{
                flexGrow: 1,
                overflowX: "hidden",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: 0
                }
              }}>
                <Topbar
                  toggleSidebar={toggleSidebar}
                  setToggleSidebar={setToggleSidebar}
                />
                <Box p="20px">
                  <AppRoutes />
                </Box>
              </Box>
            </BrowserRouter>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
