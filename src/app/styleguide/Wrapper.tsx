import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { createStore } from "redux"
import rootReducer from "./mockReducers"

const store = createStore(rootReducer)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
    credentials: "include",
  }),
})

/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }: any) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ApolloProvider>
)

export default Wrapper
