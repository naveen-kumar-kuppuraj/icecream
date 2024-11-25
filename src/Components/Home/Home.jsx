
import Home2 from './Home2';
import Home3 from './Home3';
import '../Home/Home.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://www.maharajaicecream.com/img/10.jpg ',

    key: 1,

  },
  {
    src: 'https://www.maharajaicecream.com/img/20.jpg',

    key: 2,
  },
  {
    src: 'https://www.maharajaicecream.com/img/8.jpg',

    key: 3,
  },
  {
    src: 'https://www.maharajaicecream.com/img/18.jpg',

    key: 4,
  },
  {
    src: 'https://www.maharajaicecream.com/img/3.jpg',

    key: 5,
  },
  {
    src: 'https://www.maharajaicecream.com/img/19.jpg',

    key: 6,
  }, {
    src: 'https://www.maharajaicecream.com/img/6.jpg',

    key: 7,
  },
  {
    src: 'https://www.maharajaicecream.com/img/4.jpg',

    key: 8,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: '0px', height: '0px' }} className="d-block w-100 h-100" />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />

      </Carousel>
      <Home2 />
      <Home3 />
    </>

  );
}

export default Example;