import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App.js";

// Import of store (redux)
import { store } from "./app/store.js";

const render = () => {
  ReactDOM.render(
    // Includes state (store.getState) and dispatch to make it work
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
