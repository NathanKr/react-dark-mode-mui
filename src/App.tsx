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
      <p>This app is using the dark mode hard code via darkTheme </p>
      <p>you can replace to light mode in code via lightTheme</p>
    </ThemeProvider>
  );
}

export default App;
