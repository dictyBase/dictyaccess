import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { useAuthStore } from "features/Authentication/AuthStore"
import { mutationList } from "common/graphql/mutation"
import configureStore from "app/store/configureStore"
import history from "common/utils/routerHistory"

const store = configureStore({})

const isMutation = (value: string) => {
  if (mutationList.includes(value)) {
    return true
  }
  return false
}

const createClient = async (token: string) => {
  const authLink = setContext((request, { headers }) => {
    const mutation = isMutation(request.operationName || "")
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
        "X-GraphQL-Method": mutation ? "Mutation" : "Query",
      },
    }
  })

  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
    credentials: "include",
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
}

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

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = React.useState<ApolloClient<any> | undefined>(
    undefined,
  )
  const [{ token }] = useAuthStore()
  React.useEffect(() => {
    createClient(token).then((apollo) => setClient(apollo))

    return () => {}
  }, [token])

  if (client === undefined) return <div />

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

export { isMutation }
export default AppProviders
