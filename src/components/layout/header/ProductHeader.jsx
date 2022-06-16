import React from "react";
import { useOrder } from "../../../context/OrderContext";
import { useProduct } from "../../../context/ProductContext";
function ProductHeader() {
  const { products, activeProducts, inActiveProducts } = useProduct();
  return (
    <div className="flex justify-around  w-[83vw] my-8">
      <div className="bg-payment-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Total Product</h1>
        <h1 className="text-center text-[#00598A] text-2xl font-bold">
          {products.length}
        </h1>
      </div>
      <div className="bg-pending-notification-color w-34 px-4 py-8  rounded-lg">
        <h1 className="text-xl font-bold">Active Products</h1>
        <h1 className="text-center text-[#A865C9] text-2xl font-bold">
          {activeProducts.length}
        </h1>
      </div>
      <div className="bg-delivered-notification-color w-34 px-4 py-8 rounded-lg">
        <h1 className="text-xl font-bold">InActive Products</h1>
        <h1 className="text-center text-[#FF9148] text-2xl font-bold">
          {inActiveProducts.length}
        </h1>
      </div>
    </div>
  );
}

export default ProductHeader;
