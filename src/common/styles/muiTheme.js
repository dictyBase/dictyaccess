import { createMuiTheme } from "@material-ui/core/styles"

// create theme with our standard tab overrides
const muiTheme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: "#0059b3",
        color: "#fff",
      },
      indicator: {
        backgroundColor: "#858780",
      },
    },
  },
})

export default muiTheme
