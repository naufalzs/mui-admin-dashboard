import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/page/global/Topbar";
import Sidebar from "./components/page/global/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <BrowserRouter>
              <Sidebar />
              <main className="content">
                <Topbar />
                <Box p="20px">
                  <AppRoutes />
                </Box>
              </main>
            </BrowserRouter>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
