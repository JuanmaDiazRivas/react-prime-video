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

interface Props {
  slidesPerView?: number | "auto";
  slidesPerColumn?: number;
  swiperMode?: string;
  autoplay?: boolean;
  withPrime?: boolean;
}

//TODO sobreescribir la clase de la paginacion
const Carousel: React.FC<Props> = (props) => (
  <div className={styles.Carousel}>
    <Swiper
      className={styles[props.swiperMode ?? "bigSwiper"]}
      loop={false}
      navigation={true}
      spaceBetween={10}
      autoplay={
        props.autoplay ?? {
          delay: 5000,
          disableOnInteraction: false,
        }
      }
      slidesPerView={props.slidesPerView}
      slidesPerColumn={props.slidesPerColumn}
      slidesPerColumnFill={props.slidesPerColumn ? "row" : undefined}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
      }}
      breakpoints={{
        // when window width is <= 768px
        768: {
          slidesPerView: props.swiperMode === 'bigSwiper' ? 1 : 2,
        },
        992: { 
          slidesPerView: props.swiperMode === 'bigSwiper' ? 1 : 5
        }
      }}
    >
      {getSlides(props.withPrime)}
    </Swiper>
  </div>
);

export default Carousel;

function getSlides(withPrime?: boolean) {
  let swiperSlides = [];
  for (let i = 1; i < 6; i++) {
    swiperSlides.push(
      <SwiperSlide>
        <div className="swiperSlide">
          <div className={withPrime ? styles.primeTag : ""}></div>
          <img
            alt="description"
            src={require(`src/assets/img/carousel/carousel${i}.jpeg`).default}
          />
        </div>
      </SwiperSlide>
    );
  }
  return swiperSlides;
}
