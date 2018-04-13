import React from "react"
import ReactDOM from "react-dom"
import App from "app/layout/App"
import registerServiceWorker from "./registerServiceWorker"
import "typeface-roboto"
import "app/layout/AppStyles"

// imports for JSS injection
import JssProvider from "react-jss/lib/JssProvider"
import { create } from "jss"
import preset from "jss-preset-default"
import { createGenerateClassName } from "material-ui/styles"

const generateClassName = createGenerateClassName()
const jss = create(preset())
// We define a custom insertion point JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById("jss-insertion-point")

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <App />
  </JssProvider>,
  document.getElementById("root")
)
registerServiceWorker()
