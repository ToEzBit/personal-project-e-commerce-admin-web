import React from "react";
import { cancelOrder } from "../../../api/orders";

function CancelOrdersItem({ id, createdAt, status, totalPrice, setRerender }) {
  const handleCancelOrder = async () => {
    confirm(`Are you sure you want to cancel orderId : ${id} ?`) &&
      (await cancelOrder(id));
    setRerender((prev) => !prev);
  };
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {createdAt}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {totalPrice}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {status.toUpperCase()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="bg-gray-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleCancelOrder}
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
}

export default CancelOrdersItem;
