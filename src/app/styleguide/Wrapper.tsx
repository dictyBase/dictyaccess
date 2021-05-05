import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { createStore } from "redux"
import useCreateApolloClient from "common/hooks/useCreateApolloClient"
import rootReducer from "./mockReducers"

const store = createStore(rootReducer)
/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const client = useCreateApolloClient()

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ApolloProvider>
  )
}

export default Wrapper
