import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* it is not working without CssBaseline */}
      <CssBaseline /> 
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
}

export default App;