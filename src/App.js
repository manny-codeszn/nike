import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Features from './components/Features';
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <div className="bg">
        <Navbar onSlideChange={handleSlideChange} currentSlide={currentSlide} />
        <Slider currentSlide={currentSlide} />
      </div>
      <Features />
      <Product />
      <Footer />
    </div>
  );
}

export default App; 