import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards';

const responsive = {
  superLargeDesktop: {
    // brake points of card carousel.
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

function CardCarousel({ latestProducts }) {
  return (
    <div className="card-carousel">
          <Carousel responsive={responsive}>
              {
                  latestProducts.map((product) => (
        <div><Cards product={product} /></div>
                      
                  ))
              }

      </Carousel>
    </div>
  );
}

export default CardCarousel;
