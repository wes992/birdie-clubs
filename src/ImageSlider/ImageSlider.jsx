import React, { useState } from "react";

const ImageSlider = ({ photos = [], className = "" }, ...otherProps) => {
  const [displayedPhotoIndex, setDisplayedPhotoIndex] = useState(0);

  return (
    <div className={className + "img-slider"}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        // {...otherProps}
      >
        <div className="carousel-indicators">
          {photos.map((photo, index) => (
            <button
              key={"indicator" + index}
              type="button"
              onClick={() => setDisplayedPhotoIndex(index)}
              data-bs-target="#carouselExampleCaptions"
              className={index === displayedPhotoIndex ? "active" : ""}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {photos.map((photo, index) => {
            return (
              <div
                key={photo + index}
                className={
                  displayedPhotoIndex === index
                    ? "carousel-item active"
                    : "carousel-item "
                }
              >
                <img
                  src={photo}
                  className="d-block carousel-item__image"
                  alt={photo.details}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => {
            setDisplayedPhotoIndex((displayedPhotoIndex) =>
              displayedPhotoIndex != 0
                ? displayedPhotoIndex - 1
                : photos.length - 1
            );
          }}
          type="button"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() =>
            setDisplayedPhotoIndex((displayedPhotoIndex) =>
              displayedPhotoIndex < photos.length - 1
                ? displayedPhotoIndex + 1
                : 0
            )
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export { ImageSlider };
