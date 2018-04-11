import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "app/layout/App"
import registerServiceWorker from "./registerServiceWorker"
import "typeface-roboto"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
