import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartState } from "../Context/Context";
import { cartReducer } from "../Context/reducers";
import { Popup } from "../Popup";

const UserActions = ({}) => {
  const {
    state: { cart },
  } = CartState();

  const cartQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="user-actions">
      <FontAwesomeIcon icon={"user-circle"} />
      {!!cartQuantity ? (
        <div className="quantity-container">
          <div className="quantity">{cartQuantity}</div>
          <FontAwesomeIcon icon={"shopping-cart"} />
        </div>
      ) : (
        <FontAwesomeIcon icon={"shopping-cart"} />
      )}
    </div>
  );
};

export { UserActions };
