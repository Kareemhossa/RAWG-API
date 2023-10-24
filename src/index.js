import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//REDUX SETUP
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducer/Reducer";
// Router Dom
import { BrowserRouter } from "react-router-dom";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// <React.StrictMode></React.StrictMode>
