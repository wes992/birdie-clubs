import React from "react";
import { Link } from "react-router-dom";

import routes from "../common/routes";

import { UserActions } from "../User";

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        {routes.map((route) => (
          <Link to={route.path} key={route.id} className="nav-link" {...route}>
            {!!route.content ? route.content : route.text}
          </Link>
        ))}
        <UserActions />
      </ul>
    </div>
  );
};

export { Nav };
