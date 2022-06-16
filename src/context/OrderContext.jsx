import React, { createContext, useContext, useEffect, useState } from "react";
import { getOrders } from "../api/orders";

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [excludeNewOrder, setExcludeNewOrder] = useState([]);
  const [paymentOrder, setPaymentOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);
  const [reRerender, setRerender] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getOrders();
      setOrders(res);
      const excludeNewOrder = res.filter((el) => el.status !== "neworder");
      setExcludeNewOrder(excludeNewOrder);
      const paymentOrder = res.filter((el) => el.status === "payment");
      setPaymentOrder(paymentOrder);
      const pendingOrder = res.filter((el) => el.status === "pending");
      setPendingOrder(pendingOrder);
    };
    fetch();
  }, [reRerender]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        excludeNewOrder,
        paymentOrder,
        setRerender,
        pendingOrder,
      }}
    >
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
