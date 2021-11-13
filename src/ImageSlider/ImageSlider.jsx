import React from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, A11y } from "swiper";

const ImageSlider = ({ photos, className }, ...otherProps) => {
  return (
    <div className={className + " img-slider"}>
      <Swiper
        // spaceBetween={10}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        {...otherProps}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img src={photo} alt={photo.description} className="slider-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { ImageSlider };
