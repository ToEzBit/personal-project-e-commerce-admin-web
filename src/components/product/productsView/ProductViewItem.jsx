import React from "react";

function ProductViewItem({ id, productName, category, price, stock, status }) {
  const shortProductName =
    productName.length > 20
      ? productName.substring(0, 20) + "..."
      : productName;
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {shortProductName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {category.toUpperCase()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {price}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
          stock === 0 ? "text-red-600" : ""
        }`}
      >
        {stock}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
          status === "active" ? "text-green-400" : "text-red-400"
        }`}
      >
        {status.toUpperCase()}
      </td>
    </tr>
  );
}

export default ProductViewItem;
