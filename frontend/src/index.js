import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Modal from'react-modal';
import "react-datetime/css/react-datetime.css";


Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App id='root'/>
    </BrowserRouter>
  </React.StrictMode>
);
