import React from "react";
import ProductHeader from "../components/layout/header/ProductHeader";
import ProductsViewContainer from "../components/product/productsView/ProductsViewContainer";

function ProductView() {
  return (
    <div>
      <ProductHeader />
      <ProductsViewContainer />
    </div>
  );
}

export default ProductView;
