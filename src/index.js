import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import history from "common/utils/routerHistory"
import App from "app/layout/App"
import configureStore from "app/store/configureStore"
import registerServiceWorker from "./registerServiceWorker"
import "typeface-roboto"
import "app/layout/AppStyles"

// imports for JSS injection
import JssProvider from "react-jss/lib/JssProvider"
import { create } from "jss"
import preset from "jss-preset-default"
import { createGenerateClassName } from "@material-ui/core/styles"

const generateClassName = createGenerateClassName()
const jss = create(preset())
// We define a custom insertion point JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById("jss-insertion-point")

const store = configureStore()

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </div>
    </Provider>
  </JssProvider>,
  document.getElementById("root"),
)
registerServiceWorker()
