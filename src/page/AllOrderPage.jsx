import React from "react";
import Header from "../components/layout/header/Header";
import AllOrdersContainer from "../components/order/allOrders/AllOrdersContainer";

function OrderPage() {
  return (
    <div>
      <Header />
      <AllOrdersContainer />
    </div>
  );
}

export default OrderPage;
