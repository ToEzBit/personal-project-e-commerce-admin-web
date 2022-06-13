import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../components/layout/sidebar/SideBar";
import { useAuth } from "../context/AuthContext";
import OrderPage from "../page/OrderPage";
import LoginPage from "../page/LoginPage";
import ProductAdd from "../page/ProductAdd";
import ProductView from "../page/ProductView";
import ProductEdit from "../page/ProductEdit";
import ProductRemove from "../page/ProductRemove";

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      x
      {user ? (
        <>
          <Route path="" element={<SideBar />}>
            <Route path="/order" element={<OrderPage />} />
            <Route path="/product-add" element={<ProductAdd />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/product-edit" element={<ProductEdit />} />
            <Route path="/product-remove" element={<ProductRemove />} />
            <Route path="*" element={<Navigate to="/order" />} />
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
