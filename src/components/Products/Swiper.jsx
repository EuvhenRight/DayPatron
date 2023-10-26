import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/zoom';

import './styles.css';

// import required modules
import { Zoom, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Image } from '@chakra-ui/react';

export default function SwiperComponent({ product }) {
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#38a169',
          '--swiper-navigation-color': '#38a169',
        }}
        zoom={true}
        cssMode={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Zoom, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {product.image.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image src={`/images/${image.url}`} alt={product.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
