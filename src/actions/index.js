export const ADD_TO_CART = "ADD_TO_CART";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const receiveProduct = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});
