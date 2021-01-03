import { createMuiTheme } from "@material-ui/core/styles";

const black = "rgb(0,0,0)";
const white = "rgb(255,255,255)";

export default createMuiTheme({
  palette: {
    primary: {
      main: black,
    },
    secondary: {
      main: white,
    },
  },
});
