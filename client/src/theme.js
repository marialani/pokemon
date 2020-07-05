import { createMuiTheme } from "@material-ui/core/styles";
// import black from "@material-ui/core/colors/black";

import BangersRegular from "./pages/Pokedex/fonts/Bangers-Regular.ttf";

const bangers = {
  fontFamily: "Bangers",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Bangers'),
    local('Bangers-Regular'),
    url(${BangersRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export default createMuiTheme({
  // Customize MU theme properties here;
  // check default theme here https://material-ui.com/customization/default-theme/#default-theme;
  palette: {
    primary: {
      main: "#3564AD",
    },
  },
  typography: {
    fontFamily: "Bangers, Arial",
    // color: "#3564AD",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [bangers],
      },
    },
  },
});
