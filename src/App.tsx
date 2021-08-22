import "./App.scss";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ListCarouselMedium from "./components/ListCarouselMedium/ListCarouselMedium";
import ListCarouselDouble from "./components/ListCarouselDouble/ListCarouselDouble";
import BigCarousel from "./components/BigCarousel/BigCarousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BigCarousel />
      <ListCarouselMedium />
      <ListCarouselDouble />
      <Footer />
    </div>
  );
}

export default App;
