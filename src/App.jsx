import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/page/global/Topbar";
import Sidebar from "./components/page/global/Sidebar";
import { BrowserRouter } from "react-router-dom";

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
              </main>
            </BrowserRouter>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
