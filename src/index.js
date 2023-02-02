import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {reducer} from "./reducers/reducer.js";

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
        <React.StrictMode>
            <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            </Provider>
        </React.StrictMode>
);
