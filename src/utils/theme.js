import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "BR Firma",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "58px",
      fontWeight: "400",
    },
    h2: {
      fontSize: "45px",
    fontWeight: "500",
    },
    h3: {
      fontSize: "22px",
      fontWeight: "600",
    },
    p: {
      fontSize: "14px",
      color: "#A4A4A4",
      letterSpacing: ".3px",
    },
    button: {
      fontSize: "12px",
      color: "white",
      fontWeight: "700",
    },
  },
  palette: {
    primary: {
      light: "#A4A4A4",
      main: "#1C468A",
      dark: "#656464",
    },
    secondary: {
      main: "#FC8900",
    },
  },
});
