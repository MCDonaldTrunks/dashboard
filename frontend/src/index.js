import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Modal from "react-modal";

import App from "./App";
import store from "./store/store";  // Import the Redux store

// Styles
import "./index.css";
import "react-datetime/css/react-datetime.css";

// Set the root element for Modal
Modal.setAppElement('#root');

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provide the Redux store to the application */}
      <BrowserRouter>          {/* Wrap the application with BrowserRouter for routing */}
        <App id='root' />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
