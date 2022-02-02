import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducer";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
