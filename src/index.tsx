import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/global.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { enableMapSet } from "immer";

enableMapSet();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster toastOptions={{ duration: 1500 }} />
    </BrowserRouter>
  </React.StrictMode>,
);
