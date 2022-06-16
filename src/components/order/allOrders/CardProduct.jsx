import React from "react";

function CardProduct({ product, amount, price }) {
  const productName =
    product.productName.length > 30
      ? product.productName.substring(0, 30) + "..."
      : product.productName;
  return (
    <div className="flex  px-4 py-4">
      <img
        className="w-14"
        src={product.ProductImages[0].image}
        alt={product.productName}
      />
      <div className="mx-4">
        <p className="text-start">{`Product Id ${product.id}`}</p>
        <p className=" flex-col">{productName}</p>
        <div className="flex">
          <p className="text-red-500  text-start">
            {product.category.toUpperCase()}
          </p>
          <p className="mx-4">{`price ${price}`}</p>
          <p className="mx-4">{`amount ${amount}`}</p>
          <p className="mx-4">{`total ${price * amount}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
