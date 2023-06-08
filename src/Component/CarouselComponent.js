import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
    >



      <div> 
        <img src="../images/bg11.jpg" alt="Carousel Image 1" />
      </div>
      <div>
        <img src="../images/bg6.jpg" alt="Carousel Image 2" />
      </div>
      <div>
        <img src="../images/bg12.jpg" alt="Carousel Image 3" />
      </div>
      <div>
        <img src="../images/bg7.jpg" alt="Carousel Image 3" />
      </div>
      <div>
        <img src="../images/bg13.jpg" alt="Carousel Image 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
