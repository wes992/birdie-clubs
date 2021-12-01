import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemsState } from "../Context/Context";
import { cartReducer } from "../Context/reducers";
import { Popup } from "../Popup";
import { Cart } from "../Cart";

const UserActions = ({}) => {
  const { cart } = ItemsState();

  const cartQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="user-actions">
      <FontAwesomeIcon icon={"user-circle"} />
      <Popup header="GeeksforGeeks" body={<Cart />}>
        {!!cartQuantity ? (
          <div className="quantity-container">
            <div className="quantity">{cartQuantity}</div>
            <FontAwesomeIcon icon={"shopping-cart"} />
          </div>
        ) : (
          <FontAwesomeIcon icon={"shopping-cart"} />
        )}
      </Popup>
    </div>
  );
};

export { UserActions };
