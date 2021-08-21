import "./App.scss";
import Navbar from "src/components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bigCarousel">
        <Carousel slidesPerView={1} swiperMode={"bigSwiper"}/>
      </div>
      <div className="categories">
        <CarouselSection withPrime={true} action={'Ver más'} title={"Amazon Originals y Exclusivos"}/>
      </div>
      <div className="categories">
        <CarouselSection withPrime={true} slidesPerColumn={2} title={"Películas que pensamos que te gustarán"}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
