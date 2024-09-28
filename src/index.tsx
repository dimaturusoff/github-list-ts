import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import 'normalize.css';

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
