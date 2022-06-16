import React from "react";
import Header from "../components/layout/header/Header";
import PaymentOrdersContainer from "../components/order/paymentOrders/PaymentOrdersContainer";

function PaymentOrderPage() {
  return (
    <div>
      <Header />
      <PaymentOrdersContainer />
    </div>
  );
}

export default PaymentOrderPage;
