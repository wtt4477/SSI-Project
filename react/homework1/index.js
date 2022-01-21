import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppItem4 from "./AppItem4";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <AppItem4 />
  </StrictMode>,
  rootElement
);
