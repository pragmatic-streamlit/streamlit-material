import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "@dp-launching/mp-react-components/src/styles.less"
import "bulma/css/bulma.min.css"
import "bulma-tooltip/dist/css/bulma-tooltip.min.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)