import styles from "./CarouselSection.module.scss";
import primeBlue from "src/assets/img/media/primeBlue.png";
import Carousel from "../Carousel/Carousel";

interface Props {
  title?: string;
  slidesPerColumn?: number;
  withPrime?: boolean;
  action?: string;
}
const CarouselSection: React.FC<Props> = (props) => (
  <div className={styles.CarouselSection}>
    <div className={styles.carouselSectionHeader}>
      <img
        alt="description"
        src={primeBlue}
        className={props.withPrime ? styles.primeBlue : "d-none"}
      />
      <div className={styles.sectionTitle}>
        <h2 className={props.action === undefined ? styles.completeTitle : ""}>
          {props.title ?? "Category"}
        </h2>
        <span className={props.action === undefined ? "d-none" : ""}>
          {props.action}
        </span>
      </div>
    </div>

    <div className={styles.carouselWrapper}>
      <Carousel
        withPrime={props.withPrime}
        slidesPerView={2}
        slidesPerColumn={props.slidesPerColumn ?? undefined}
        autoplay={false}
        swiperMode={"mediumSwiper"}
      />
    </div>
  </div>
);

export default CarouselSection;
