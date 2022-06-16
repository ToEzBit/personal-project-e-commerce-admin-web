import React from "react";
import PendingOrdersContainer from "../components/order/pendingOrders/PendingOrdersContainer";
import Header from "../components/layout/header/Header";

function PendingOrderPage() {
  return (
    <div>
      <Header />
      <PendingOrdersContainer />
    </div>
  );
}

export default PendingOrderPage;
