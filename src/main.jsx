import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
);
