import React from "react";
import { ItemsState } from "../Context/Context";

const Cart = ({}) => {
  const { cart } = ItemsState();

  return (
    <div className="cart">
      <div className="cart-list">
        {cart.map(({ id, brand, model, photos, quantity }) => (
          <div className="cart-item" key={id}>
            <div className="cart-item__photos">
              <img src={photos[0]} alt="test" style={{ width: 40 }} />
            </div>
            <div className="cart-item__name">{brand + " " + model}</div>
            <div className="cart-item__quantity">{quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Cart };
