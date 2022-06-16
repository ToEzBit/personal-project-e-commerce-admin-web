import React, { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../api/product";

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [inActiveProducts, setInActiveProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getProducts();
      setProducts(res.reverse());
      const activeProducts = res.filter((el) => el.status === "active");
      setActiveProducts(activeProducts);
      const inActiveProducts = res.filter((el) => el.status === "inactive");
      setInActiveProducts(inActiveProducts);
    };
    fetch();
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, activeProducts, inActiveProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export default ProductContextProvider;

export { useProduct };
