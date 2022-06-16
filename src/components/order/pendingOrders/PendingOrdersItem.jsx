import React, { useState } from "react";
import { submitTracking } from "../../../api/orders";

function PendingOrdersItem({ id, createdAt, address, setRerender }) {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmitTracking = async () => {
    if (!trackingNumber) {
      alert("Please enter tracking number");
      return;
    }
    confirm(
      `Are you sure to submit tracking ${trackingNumber} to order ${id}`
    ) && (await submitTracking(id, trackingNumber));
    setTrackingNumber("");
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
        {`${address.description}, ${address.province}, ${address.district} ${address.postalCode}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <input
          className="bg-white  border border-solid border-gray-300 rounded "
          type="text"
          placeholder="Enter Tracking"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmitTracking}
        >
          Submit Tracking
        </button>
      </td>
    </tr>
  );
}

export default PendingOrdersItem;
