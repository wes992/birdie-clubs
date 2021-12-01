import React, { useState } from "react";
import { InputSelect } from "../common/InputSelect";
import { addToCart } from "../Context/actions";
import { ItemsState } from "../Context/Context";

import { ImageSlider } from "../ImageSlider";

const ItemDetails = ({ item, onClose }) => {
  const { id, brand, model, details, photos, options = null } = item;
  const [selection, setSelection] = useState({});

  const handleClose = (e) => {
    if (e.target.id === "background") {
      onClose();
    }
  };

  const { cart, dispatch } = ItemsState();

  console.log("cart", cart);

  const CreateRangeArray = (size, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };

  const quantityOptions = CreateRangeArray(10).map((item, index) => {
    return { key: item + index, value: item, label: item };
  });

  console.log("selection", selection);

  const handleAddToCart = () => {
    const selectionDetails = {
      ...selection,
      quantity: Number(selection.quantity),
      ...item,
    };

    const alreadyInCart = cart.find(
      (item) => item.id === id && selection.option === item.option
    );

    if (alreadyInCart) {
      const item = cart.find(
        (item) => item.id === id && selection.option === item.option
      );

      item.quantity = item.quantity + Number(selection.quantity);

      //might need a dispatch here for quantity
    } else {
      dispatch(addToCart(selectionDetails));
    }

    onClose();
  };

  return (
    <div className="item-details" id="background" onClick={handleClose}>
      <div className="card">
        <ImageSlider photos={photos} />
        <div className="card-body">
          <h5 className="item-details__name">{brand + " " + model}</h5>
          <ul>
            {details.map((item, index) => (
              <li key={id + index} className="small">
                {item}
              </li>
            ))}
          </ul>
          <div className="footer">
            <InputSelect
              id={id + "quantity"}
              label="Select Quantity"
              options={quantityOptions}
              onChange={(e) =>
                setSelection({ ...selection, quantity: e.target.value })
              }
            />
            {!!options && (
              <InputSelect
                id={id + "select"}
                label="Select an Option"
                options={options.map((option, index) => {
                  return { key: option + index, value: option, label: option };
                })}
                onChange={(e) =>
                  setSelection({ ...selection, option: e.target.value })
                }
                placeholder="Select Item"
              />
            )}
            <button
              className="btn btn-primary btn-lg ml-auto"
              type="button"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ItemDetails };
