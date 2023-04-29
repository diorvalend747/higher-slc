import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#ffff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
