import React from "react";
import { newReleases } from "../assets/newReleases";
import { OverviewCard } from "./OverviewCard";

const Releases = ({}) => {
  return (
    <div className="releases">
      {newReleases.map((release) => (
        <OverviewCard
          key={release.id}
          link={`/clubs/details:${release.id}`}
          item={release}
        />
      ))}
    </div>
  );
};

export { Releases };
