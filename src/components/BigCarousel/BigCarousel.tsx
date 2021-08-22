import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import Carousel from "../Carousel/Carousel";
import styles from "./BigCarousel.module.scss";

const BigCarousel = () => (
  <div className={styles.BigCarousel}>
    <Carousel
      slidesPerView={1}
      swiperMode={"bigSwiper"}
      data={getSwiperSlidesForType(SwiperTypes.bigSwiper)[0]}
    />
  </div>
);

export default BigCarousel;
