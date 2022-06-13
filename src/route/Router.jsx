import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import ProductAdd from "../page/ProductAdd";
import ProductView from "../page/ProductView";

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-add" element={<ProductAdd />} />
          <Route path="/product-view" element={<ProductView />} />
          <Route path="*" element={<Navigate to="/" />} />
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
