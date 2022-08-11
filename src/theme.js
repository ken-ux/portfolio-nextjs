import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#000000",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h4: {
      fontWeight: "bold",
    },
  },
});

export default theme;
