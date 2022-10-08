import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from "../crousal/cb1.jpeg";
import img1 from "../crousal/bg1.jpg";
import img2 from "../crousal/b.png";
import img3 from "../crousal/bb.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;