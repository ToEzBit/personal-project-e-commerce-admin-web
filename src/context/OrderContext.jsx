import React, { createContext, useContext, useEffect, useState } from "react";
import { getOrders } from "../api/orders";

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [excludeNewOrder, setExcludeNewOrder] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getOrders();
      setOrders(res);
      const excludeNewOrder = res.filter((el) => el.status !== "neworder");
      setExcludeNewOrder(excludeNewOrder);
    };
    fetch();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, excludeNewOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

const useOrder = () => {
  const ctx = useContext(OrderContext);
  return ctx;
};

export default OrderContextProvider;
export { useOrder };
