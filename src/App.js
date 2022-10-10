import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <ControlledCarousel />
    </div>
  );
}

export default App;
