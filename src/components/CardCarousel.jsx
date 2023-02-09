import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CardCarousel() {
  return (
    <div className="card-carousel">
      <Carousel responsive={responsive}>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
        <div><Cards /></div>
      </Carousel>
    </div>
  );
}

export default CardCarousel;
