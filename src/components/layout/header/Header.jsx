import React from "react";
import { useOrder } from "../../../context/OrderContext";

function Header() {
  const { paymentOrder, pendingOrder, deliveredOrder } = useOrder();
  return (
    <div className="flex justify-around  w-[83vw] my-8">
      <div className="bg-payment-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Payment Orders</h1>
        <h1 className="text-center text-[#00598A] text-2xl font-bold">
          {paymentOrder.length}
        </h1>
      </div>
      <div className="bg-pending-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Pending Orders</h1>
        <h1 className="text-center text-[#A865C9] text-2xl font-bold">
          {pendingOrder.length}
        </h1>
      </div>
      <div className="bg-delivered-notification-color w-34 px-4 py-8 rounded-lg">
        <h1 className="text-xl font-bold">Delivered Orders</h1>
        <h1 className="text-center text-[#FF9148] text-2xl font-bold">
          {deliveredOrder.length}
        </h1>
      </div>
    </div>
  );
}

export default Header;
