import React from "react";
import { confirmPayment } from "../../../api/orders";
import ModalContainer from "./modal/ModalContainer";

function PaymentOrdersItem({ id, createdAt, totalPrice, slip, setRerender }) {
  const handleSubmitPayment = async () => {
    confirm(`Are you sure to submit order id: ${id}  payment?`) &&
      (await confirmPayment(id));
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
        <ModalContainer id={id} slip={slip} totalPrice={totalPrice} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="bg-orange-400 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmitPayment}
        >
          Confirm Payment
        </button>
      </td>
    </tr>
  );
}

export default PaymentOrdersItem;
