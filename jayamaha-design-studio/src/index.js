import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import "./index.css"
import "./fonts/Neue-montreal/NeueMontreal-Light.otf"
import "./fonts/Neue-montreal/NeueMontreal-Medium.otf"
import "./fonts/Neue-montreal/NeueMontreal-Regular.otf"

import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
