import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index"; //index.js ใน ไฟล์ ที่รวม Reducers ไว้ด้วยกันแล้ว
import reduxThunk from "redux-thunk"; //แก้ไข return จาก obj เป็น function

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
