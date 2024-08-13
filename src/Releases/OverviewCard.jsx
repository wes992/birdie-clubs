import React from "react";
import { Link } from "react-router-dom";
import { ImageSlider } from "../ImageSlider";

const OverviewCard = ({ imageSlider = false, item, link = false }) => {
  const { id, brand, model, details = [], photos } = item;

  const _details = details.slice(0, 3);
  return (
    <div className="card overview-card">
      {imageSlider ? (
        <ImageSlider
          className="card-img-top overview-card__img"
          photos={photos}
        />
      ) : (
        !!photos.length && (
          <img
            className="card-img-top overview-card__img"
            src={photos[0]}
            alt={""}
          />
        )
      )}
      <div className="card-body">
        <h5 className="card-title">{`${brand} ${model}`}</h5>
        <ul className="card-text overview-card__list">
          {_details.map((detail, index) => (
            <li key={id + index} className="small">
              {detail}
            </li>
          ))}
        </ul>
        {link && (
          <div className="footer">
            <Link to={link} className="btn btn-primary">
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { OverviewCard };
