import React from "react";
import Header from "../components/layout/header/Header";
import AllOrdersContainer from "../components/order/allOrders/AllOrdersContainer";

function OrderPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mx-8">Orders</h1>
      <Header />
      <AllOrdersContainer />
    </div>
  );
}

export default OrderPage;
