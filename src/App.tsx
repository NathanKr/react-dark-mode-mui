import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import { darkTheme, lightTheme } from "./themes";
import { useState } from "react";

function App() {
  const [createdTheme, setCreatedTheme] = useState(darkTheme);
  return (
    <ThemeProvider theme={createdTheme}>
      {/* it is not working without CssBaseline */}
      <CssBaseline />
      <Button
        onClick={() =>
          setCreatedTheme(createdTheme === darkTheme ? lightTheme : darkTheme)
        }
        variant="contained"
      >
        Toggle Theme
      </Button>
    </ThemeProvider>
  );
}

export default App;
