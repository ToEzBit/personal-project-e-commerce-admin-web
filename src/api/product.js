import axios from "../config/axios";

export const getProducts = async () => {
  const res = await axios.get(`/products`);
  return res.data.products;
};

export const createProduct = async (formData) => {
  await axios.post(`/products`, formData);
};

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data.product;
};

export const updateProduct = async (id, formData) => {
  await axios.patch(`/products/${id}`, formData);
};

export const deleteProductImage = async (imageId) => {
  await axios.delete(`/products/image/${imageId}`);
};
