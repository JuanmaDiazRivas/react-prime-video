import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import styles from "./Carousel.module.scss";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { SwiperData } from "src/models/SwiperData";
import { PRIME } from "src/models/GlobalConstants";
import { SwiperTypes } from "src/models/SwiperTypes";
import ImageResponsive from "../ImageResponsive/ImageResponsive";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

interface Props {
  slidesPerView?: number | "auto";
  slidesPerColumn?: number;
  swiperMode?: string;
  autoplay?: boolean;
  data?: SwiperData;
}

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
          slidesPerView: props.swiperMode === "bigSwiper" ? 1 : 2
        },
        992: {
          slidesPerView: props.swiperMode === 'bigSwiper' ? 1 : 3
        },
        1025 : {
          slidesPerView: props.swiperMode === 'bigSwiper' ? 1 : 4
        },
        1520 : {
          slidesPerView: props.swiperMode === 'bigSwiper' ? 1 : 5
        }
      }}
    >
      {getSlides(props.data)}
    </Swiper>
  </div>
);

export default Carousel;

function getSlides(data: SwiperData | undefined) {
  let swiperSlides: JSX.Element[] = [];
  if (data) {
    const primeTag = data.contentType === PRIME ? styles.primeTag : '';
    data.images.forEach(imageData =>{
      swiperSlides.push(
        <SwiperSlide>
          <div className="swiperSlide">
            <div className={primeTag}></div>
            {data.type === SwiperTypes.bigSwiper ? (
              <ImageResponsive title={data.title} imagesUrl={imageData.url} />
            ) : (
              <img alt={data.title} src={imageData.url[0]} />
            )}
          </div>
        </SwiperSlide>
      );
    })
    
    return swiperSlides;
  }
}
