import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import CarouselSection from "src/components/CarouselSection/CarouselSection";
import React from "react";

const ListCarouselDouble = () => {
  return (
    <>
      {getSwiperSlidesForType(SwiperTypes.doubleSwiper).map((doubleSwiper, index) => {
        return (
          <React.Fragment key={doubleSwiper.title + index}>
            <div className="categories">
              <CarouselSection data={doubleSwiper} slidesPerColumn={2} />
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListCarouselDouble;
