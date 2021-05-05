import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "@apollo/client"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import configureStore from "app/store/configureStore"
import history from "common/utils/routerHistory"
import useCreateApolloClient from "common/hooks/useCreateApolloClient"

const store = configureStore({})

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#004080",
      light: "#476ab0",
      dark: "#001b53",
      contrastText: "#fff",
    },
    secondary: {
      main: "#008080",
      light: "#4cb0af",
      dark: "#005354",
    },
    error: {
      main: "#b2102f",
      light: "#ea4f58",
      dark: "#7b0008",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.00em",
    },
    h2: {
      fontSize: "1.50em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1.00em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
  },
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
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "#004080",
          "&:hover": {
            color: "#001b53",
          },
        },
      },
    },
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const client = useCreateApolloClient()

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>
  )
}

export default AppProviders
