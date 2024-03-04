import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AdaptiveHeight from "./components/Slider/Slider";
import ImageSlider from "./components/Slider/Slider";
import "./App.css";
import Slider from "react-slick";

const images = [
  './public/image1.jpg',
  './public/image2.jpg',
  './public/image3.jpg',
  './public/image4.jpg',
  './public/image5.jpg',
  './public/image6.jpg'
];

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <SearchBar /> */}
      {/* <Slider /> */}
      < ImageSlider images={images}/>
    </div>
  );
};

export default App;
