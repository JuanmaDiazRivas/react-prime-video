import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import CarouselSection from "../CarouselSection/CarouselSection";

const ListCarouselDouble= () => {
  return (
    <>
      {getSwiperSlidesForType(SwiperTypes.doubleSwiper).map((doubleSwiper) => {
        return (
          <div className="categories">
            <CarouselSection data={doubleSwiper} slidesPerColumn={2} />
          </div>
        );
      })}
    </>
  );
};

export default ListCarouselDouble;
