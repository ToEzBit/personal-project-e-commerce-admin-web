import axios from "../config/axios";

export const getProducts = async () => {
  const res = await axios.get(`/products`);
  return res.data.products;
};
