import React, { useState, useEffect } from "react";
import { OverviewCard } from "./OverviewCard";

const Releases = ({ newReleases }) => {
  return (
    <div className="releases">
      {newReleases.map((release) => (
        <OverviewCard
          key={release.id}
          link={`/clubs/${release.id}`}
          item={release}
        />
      ))}
    </div>
  );
};

export { Releases };
