import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#484159",
      main: "#201a30",
      dark: "#00c0b0",
      contrastText: "#6b6876",
    },
    secondary: {
      light: "#6fffff",
      main: "#0cf4e2",
      dark: "#00c0b0",
      contrastText: "#201a30",
    },
    type: "dark",
    background: {
      // default: "#201A30",
      default: "#17151e", //color into final design consideration
    },
    text: {
      primary: "#ffffff",
      secondary: "#0CF4E2",
      grey: "#6b6876",
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: "#FFFFFF",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#6B6876",
        "&$focused": {
          color: "#0cf4e2",
        },
      },
    },
  },
});

export default theme;
