import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { config } from "../config";

import { cartReducer } from "./reducers";

export const CartContext = createContext();

const Context = ({ children }) => {
  const [dbData, setDbData] = useState({});
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  useEffect(() => {
    fetch(config.databaseURL + ".json")
      .then((response) => response.json())
      .then((data) => {
        setDbData(data);
      });
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch, dbData }}>
      {children}
    </CartContext.Provider>
  );
};

export { Context };

export const CartState = () => {
  return useContext(CartContext);
};
