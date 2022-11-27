import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AppProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <AppProvider>
            <HelmetProvider>
               <App />
            </HelmetProvider>
         </AppProvider>
      </BrowserRouter>
   </React.StrictMode>
);
