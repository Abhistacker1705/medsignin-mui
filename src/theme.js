import { createTheme } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 480,
      laptop: 720,
      desktop: 1200,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#004f95",
    },
    secondary: {
      main: "#F78117",
    },
    error: {
      main: "#E12C33",
    },
    background: {
      default: "#f0f8ff",
    },
    text: {
      primary: "#2a2a2a",
      secondary: "#040707",
    },
    divider: "#7a7a7a",
  },
  typography: {
    fontSize: 18,
    fontFamily: "Poppins",
    h1: {
      fontSize: "4rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: { mobile: "", tablet: "2.75rem" },
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.125rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
  },
  shadows: {
    ...shadows,
    input: "2px 2px 8px -2px rgba(0, 79, 149, 0.1)",
    box: "0px 4px 8px -2px rgba(0, 79, 149, 0.25)",
    nav: "0px 4px 8px -2px rgba(154, 154, 154, 0.25)",
    footer: "0px -4px 8px -2px rgba(154, 154, 154, 0.25)",
  },
});

export default theme;
