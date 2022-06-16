import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import OrderContextProvider from "./context/OrderContext";
import ProductContextProvider from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <OrderContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </OrderContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
