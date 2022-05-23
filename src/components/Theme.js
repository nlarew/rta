import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { colors } from "../colors";

const themeConfig = {
  palette: {
    primary: colors.purple,
    secondary: colors.purple,
  },
}

const theme = createMuiTheme(themeConfig);

export function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
