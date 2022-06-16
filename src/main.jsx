import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import OrderContextProvider from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
