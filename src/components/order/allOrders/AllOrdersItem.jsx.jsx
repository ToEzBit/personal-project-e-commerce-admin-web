import React from "react";
import ModalContainer from "./modal/ModalContainer";

function AllOrdersItem({
  id,
  createdAt,
  status,
  totalPrice,
  OrderProducts,
  user,
  address,
  slip,
  trackingNumber,
}) {
  return (
    <>
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
          <ModalContainer
            id={id}
            user={user}
            OrderProducts={OrderProducts}
            address={address}
            slip={slip}
            trackingNumber={trackingNumber}
          />
        </td>
      </tr>
    </>
  );
}

export default AllOrdersItem;
