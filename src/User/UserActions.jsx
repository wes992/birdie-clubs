import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserActions = ({}) => {
  return (
    <div className="user-actions">
      <FontAwesomeIcon icon={"user-circle"} />
      <FontAwesomeIcon icon={"shopping-cart"} />
    </div>
  );
};

export { UserActions };
