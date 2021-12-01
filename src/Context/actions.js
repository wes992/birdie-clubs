export const addToCart = (data) => {
  return { type: "ADD_TO_CART", data };
};

export const setItems = (data) => {
  return { type: "SET_ITEMS", data };
};
