import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { config } from "../config";
import { setItems } from "./actions";

import { contextReducer } from "./reducers";

export const ItemsContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, {
    cart: [],
    balls: [],
    clubs: [],
  });

  useEffect(() => {
    fetch(config.databaseURL + ".json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setItems(data));
      });
  }, []);

  return (
    <ItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { Context };

export const ItemsState = () => {
  return useContext(ItemsContext);
};
