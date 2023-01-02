import { ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./themes";



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
