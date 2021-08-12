import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import styles from "./Carousel.module.scss";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

//TODO sobreescribir la clase de la paginacion
const Carousel = () => (
  <div className={styles.Carousel}>
    <Swiper
      className={styles.bigSwiper}
      loop={true}
      navigation={true}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class=""></span>`;
        },
      }}
    >
      {getSlides()}
    </Swiper>
  </div>
);

export default Carousel;

function getSlides() {
  let swiperSlides = [];
  for (let i = 1; i < 6; i++) {
    swiperSlides.push(
      <SwiperSlide>
        <img src={require(`src/assets/img/carousel${i}.jpeg`).default} />
      </SwiperSlide>
    );
  }
  return swiperSlides;
}
