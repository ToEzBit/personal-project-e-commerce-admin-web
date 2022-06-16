import React from "react";
import CardProduct from "../CardProduct";

function ModalBody({ OrderProducts }) {
  return (
    <>
      {OrderProducts.map((el, idx) => {
        return (
          <CardProduct
            key={idx}
            amount={el.amount}
            price={el.price}
            product={el.Product}
          />
        );
      })}
    </>
  );
}

export default ModalBody;
