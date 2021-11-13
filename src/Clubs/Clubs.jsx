import React from "react";
import { useParams } from "react-router-dom";
import { newReleases } from "../assets/newReleases";

import { ClubList } from "./ClubList";
import { ImageSlider } from "../ImageSlider";

const Clubs = () => {
  const { id } = useParams();

  console.log("id", id);

  const clubDetails = newReleases.find((item) => item.id === id) || {};

  return (
    <div className="club-details">
      {/* This is a test in the clubs component */}
      <div class="jumbotron" style={{ position: "relative" }}>
        {/* <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p> */}
        <ImageSlider photos={clubDetails.photos} slidesPerView={3} />
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export { Clubs };
