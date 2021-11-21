import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ItemDetails } from "./ItemDetails";
import { OverviewCard } from "../Releases/OverviewCard";

const ItemList = ({ items, returnPath }) => {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const itemDetails = items.find((item) => item.id === id) || {};

  return (
    <div className="items">
      {!!id ? (
        <ItemDetails item={itemDetails} onClose={() => navigate(returnPath)} />
      ) : (
        <div className="items__list">
          {items.map((item) => (
            <OverviewCard
              key={item.id}
              link={`${returnPath}/${item.id}`}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ItemList };
