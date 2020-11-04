import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "@apollo/client"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import configureStore from "app/store/configureStore"
import history from "common/utils/routerHistory"
import useApolloClient from "common/hooks/useApolloClient"

const store = configureStore({})

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
  const client = useApolloClient()

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
