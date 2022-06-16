import axios from "../config/axios";

export const getOrders = async () => {
  const res = await axios.get(`/admins/orders`);
  return res.data.orders;
};

export const confirmPayment = async (orderId) => {
  await axios.patch(`/admins/confirm-payment`, { orderId });
};

export const submitTracking = async (orderId, trackingNumber) => {
  await axios.patch(`/admins/tracking`, { orderId, trackingNumber });
};

export const cancelOrder = async (orderId) => {
  await axios.patch(`/admins/cancel-order/${orderId}`);
};
