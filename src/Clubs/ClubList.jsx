import React from "react";
import { Link } from "react-router-dom";

const ClubList = () => {
  return (
    <div className="main club-list">
      This will be a list of available Clubs
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export { ClubList };
