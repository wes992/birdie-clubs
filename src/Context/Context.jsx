import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

import { cartReducer } from "./reducers";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { Context };

export const CartState = () => {
  return useContext(CartContext);
};
