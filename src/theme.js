import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00bcd4" },
    background: { default: "#0a1929", paper: "#112240" },
    text: { primary: "#ffffff" },
  },
});

export default theme;
