import { alpha, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          userSelect: "none",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          userSelect: "none",
          backgroundColor: "inherit",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: grey["800"],
          color: alpha("#ffffff", 0.87),
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
