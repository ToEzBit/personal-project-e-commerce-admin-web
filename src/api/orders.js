import axios from "../config/axios";

export const getOrders = async () => {
  const res = await axios.get(`/admins/orders`);
  return res.data.orders;
};
