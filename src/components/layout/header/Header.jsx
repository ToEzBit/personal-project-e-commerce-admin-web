import React from "react";

function Header() {
  return (
    <div className="flex justify-around absolute w-[83vw]">
      <div className="bg-payment-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Payment Orders</h1>
        <h1 className="text-center">300</h1>
      </div>
      <div className="bg-pending-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Pending Orders</h1>
        <h1 className="text-center">120</h1>
      </div>
      <div className="bg-delivered-notification-color w-34 px-4 py-8 rounded-lg">
        <h1 className="text-xl font-bold">Delivered Orders</h1>
        <h1 className="text-center">100</h1>
      </div>
    </div>
  );
}

export default Header;
