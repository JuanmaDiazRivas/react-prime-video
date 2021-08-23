import React from "react";
import { SwiperTypes } from "src/models/SwiperTypes";
import { getSwiperSlidesForType } from "src/services/DataService";
import Carousel from "../Carousel/Carousel";
import styles from "./BigCarousel.module.scss";

const BigCarousel = () => (
  <React.Fragment>
    <div className={styles.BigCarousel}>
      <Carousel
        slidesPerView={1}
        swiperMode={"bigSwiper"}
        data={getSwiperSlidesForType(SwiperTypes.bigSwiper)[0]}
      />
    </div>
  </React.Fragment>
);

export default BigCarousel;
