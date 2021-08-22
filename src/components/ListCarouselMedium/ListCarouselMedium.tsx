import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import CarouselSection from "src/components/CarouselSection/CarouselSection";

const ListCarouselMedium = () => {
  return (
    <>
      {getSwiperSlidesForType(SwiperTypes.mediumSwiper).map((mediumSwiper) => {
        return (
          <div className="categories">
            <CarouselSection data={mediumSwiper} />
          </div>
        );
      })}
    </>
  );
};

export default ListCarouselMedium;
