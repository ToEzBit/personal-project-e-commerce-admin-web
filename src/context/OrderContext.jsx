import React, { createContext, useContext, useEffect, useState } from "react";
import { getOrders } from "../api/orders";

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [excludeNewOrder, setExcludeNewOrder] = useState([]);
  const [paymentOrder, setPaymentOrder] = useState([]);
  const [pendingOrder, setPendingOrder] = useState([]);
  const [canCancelOrder, setCanCancelOrder] = useState([]);
  const [deliveredOrder, setDeliveredOrder] = useState([]);
  const [reRerender, setRerender] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getOrders();
      setOrders(res);
      const excludeNewOrder = res
        .filter((el) => el.status !== "neworder")
        .reverse();
      setExcludeNewOrder(excludeNewOrder);
      const paymentOrder = res.filter((el) => el.status === "payment");
      setPaymentOrder(paymentOrder);
      const pendingOrder = res.filter((el) => el.status === "pending");
      setPendingOrder(pendingOrder);
      const canCancelOrder = res.filter(
        (el) =>
          el.status !== "neworder" &&
          el.status !== "delivered" &&
          el.status !== "succeed" &&
          el.status !== "canceled"
      );
      setCanCancelOrder(canCancelOrder);
      const deliveredOrder = res.filter((el) => el.status === "delivered");
      setDeliveredOrder(deliveredOrder);
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
        canCancelOrder,
        deliveredOrder,
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
