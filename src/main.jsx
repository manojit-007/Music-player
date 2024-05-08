import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AudioContextProvider from "./context/AudioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AudioContextProvider >
      <App />
    </AudioContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
