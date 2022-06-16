import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../components/layout/sidebar/SideBar";
import { useAuth } from "../context/AuthContext";
import AllOrderPage from "../page/AllOrderPage";
import PaymentOrderPage from "../page/PaymentOrderPage";
import PendingOrderPage from "../page/PendingOrderPage";
import DeliveredOrderPage from "../page/DeliveredOrderPage";
import CancelOrderPage from "../page/CancelOrderPage";
import LoginPage from "../page/LoginPage";
import ProductAdd from "../page/ProductAdd";
import ProductView from "../page/ProductView";
import ProductEdit from "../page/ProductEdit";
import ProductRemove from "../page/ProductRemove";

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="" element={<SideBar />}>
            <Route path="/all-order" element={<AllOrderPage />} />
            <Route path="/payment-order" element={<PaymentOrderPage />} />
            <Route path="/pending-order" element={<PendingOrderPage />} />
            <Route path="/delivered-order" element={<DeliveredOrderPage />} />
            <Route path="/cancel-order" element={<CancelOrderPage />} />
            <Route path="/product-add" element={<ProductAdd />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/product-edit" element={<ProductEdit />} />
            <Route path="/product-remove" element={<ProductRemove />} />
            <Route path="*" element={<Navigate to="/all-order" />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
