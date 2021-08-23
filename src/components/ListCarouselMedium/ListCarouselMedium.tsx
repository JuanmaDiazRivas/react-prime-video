import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import CarouselSection from "src/components/CarouselSection/CarouselSection";
import React from "react";

const ListCarouselMedium = () => {
  return (
    <>
      {getSwiperSlidesForType(SwiperTypes.mediumSwiper).map((mediumSwiper, index) => {
        return (
          <React.Fragment key={mediumSwiper.title + index}>
            <div className="categories">
              <CarouselSection data={mediumSwiper} />
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListCarouselMedium;
