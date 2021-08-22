import styles from "./CarouselSection.module.scss";
import primeBlue from "src/assets/img/media/primeBlue.png";
import Carousel from "../Carousel/Carousel";
import { SwiperData } from "src/models/SwiperData";
import {PRIME} from "src/models/GlobalConstants";

interface Props {
  slidesPerColumn?: number;
  data?: SwiperData;
}
const CarouselSection: React.FC<Props> = (props) => (
  <div className={styles.CarouselSection}>
    <div className={styles.carouselSectionHeader}>
      <img
        alt='Con Prime'
        src={primeBlue}
        className={props.data?.contentType === PRIME ? styles.primeBlue : "d-none"}
      />
      <div className={styles.sectionTitle}>
        <h2 className={props.data?.seeMoreText ? '': styles.completeTitle}>
          {props.data?.title ?? "Category"}
        </h2>
        <span className={props.data?.seeMoreText ? '' : 'd-none'}>
          {props.data?.seeMoreText}
        </span>
      </div>
    </div>

    <div className={styles.carouselWrapper}>
      <Carousel
        slidesPerView={2}
        slidesPerColumn={props.slidesPerColumn ?? undefined}
        autoplay={false}
        data={props.data}
        swiperMode={'mediumSwiper'}
      />
    </div>
  </div>
);

export default CarouselSection;
